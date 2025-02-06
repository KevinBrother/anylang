// 引入 ElectronAPI 类型
import type { ElectronAPI } from "@electron-toolkit/preload";

// 扩展 window 对象来包括 electronAPI
declare global {
  interface Window {
    electron: ElectronAPI;
    good: string;
  }

  // 将 __ 函数声明移到 global 作用域内
  function __(str: string): string;
}

// 声明 electronAPI 常量的类型，但不进行赋值
// declare const electronAPI: ElectronAPI;

// 导出 electronAPI 类型
// export { electronAPI };
