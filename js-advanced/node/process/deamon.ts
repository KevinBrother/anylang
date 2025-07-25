import { spawn, ChildProcess, SpawnOptions } from 'child_process';

// 定义守护进程状态类型
type DaemonStatus = 'stopped' | 'running' | 'restarting';

// 定义退出原因类型
interface ExitReason {
  code: number | null;
  signal: NodeJS.Signals | null;
}
interface Daemon {
  launch(): boolean; // 不再需要传递参数，通过构造函数初始化
  kill(signal?: NodeJS.Signals): boolean;
  restart(): void;
  getStatus(): DaemonStatus;
  getChildProcess(): ChildProcess | null;
  on(event: 'exit', callback: (reason: ExitReason) => void): void;
  on(event: 'error', callback: (err: Error) => void): void;
  on(event: 'restart', callback: (count: number) => void): void;
}

/**
 * 其实是 daemon 程序，再 robot 中不和这几个程序通信，为了和 studio 保持统一所以取名为 GrpcServer
 */
export class GrpcServer implements Daemon {
  private child: ChildProcess | null = null;
  private status: DaemonStatus = 'stopped';
  private restartCount = 0;
  private maxRestart: number;
  private command: string; // 可执行命令（如 'node'、'python'、'java' 等）
  private args: string[]; // 命令参数（如 ['./script.js', '--port=3000']）
  private options: SpawnOptions;
  private listeners: Record<string, Function[]> = {
    exit: [],
    error: [],
    restart: []
  };

  constructor(command: string, args: string[] = [], options: SpawnOptions, maxRestart: number = 10) {
    this.command = command;
    this.args = args;
    this.options = options;
    this.maxRestart = maxRestart;
  }

  launch(): boolean {
    if (this.status === 'running') {
      console.log(`守护进程已启动（命令: ${this.command}）`);
      return false;
    }

    console.log(`ready to launch 
                      [command]: ${this.command}, 
                      [args]: ${JSON.stringify(this.args)}
                      [options]: ${JSON.stringify(this.options)}`);

    this.child = spawn(this.command, this.args, this.options);
    this.status = 'running';

    console.log(`启动守护进程: ${this.command}，PID: ${this.child.pid}`);

    // 监听子进程退出事件
    this.child.on('exit', (code, signal) => {
      const reason: ExitReason = { code, signal };
      this.status = 'stopped';
      this.listeners.exit.forEach((cb) => cb(reason));
      console.log(`守护进程退出，命令: ${this.command}，退出码: ${code}，信号: ${signal}`);

      // 自动重启逻辑（未达最大次数且非正常退出）
      if (this.restartCount < this.maxRestart && (code !== 0 || signal)) {
        this.restart();
      }
    });

    this.child.on('error', (err) => {
      this.listeners.error.forEach((cb) => cb(err));
      console.log(`守护进程错误: ${JSON.stringify(err)}`);
    });

    return true;
  }

  // 终止守护进程
  kill(signal: NodeJS.Signals = 'SIGTERM'): boolean {
    console.log(`ready to kill: ${this.command}, args:,${this.args} options:${this.options}`);

    if (!this.child || this.status !== 'running') {
      console.log('守护进程未在运行，无法终止');
      return false;
    }

    this.child.kill(signal);
    this.status = 'stopped';
    console.log(`已向守护进程发送 ${signal} 信号，命令: ${this.command}`);
    return true;
  }

  // 重启守护进程
  restart(): void {
    if (this.status === 'restarting') {
      console.log('守护进程正在重启中，无需重复操作');
      return;
    }

    this.status = 'restarting';
    console.log(`准备重启守护进程: ${this.command}`);

    // 先终止当前进程，再重启
    this.kill();
    setTimeout(() => {
      this.launch(); // 复用构造函数中的 command 和 args
      this.restartCount++;
      this.listeners.restart.forEach((cb) => cb(this.restartCount));
      console.log(`守护进程已重启（第 ${this.restartCount} 次），命令: ${this.command}`);
    }, 1000);
  }

  // 获取当前状态
  getStatus(): DaemonStatus {
    return this.status;
  }

  // 获取子进程实例
  getChildProcess(): ChildProcess | null {
    return this.child;
  }

  // 事件监听
  on(event: 'exit', callback: (reason: ExitReason) => void): void;
  on(event: 'error', callback: (err: Error) => void): void;
  on(event: 'restart', callback: (count: number) => void): void;
  on(event: 'exit' | 'error' | 'restart', callback: Function): void {
    this.listeners[event].push(callback);
  }
}
