// 小明去奶茶店买奶茶，他可以通过在自助点餐机上来点不同的饮品，请你使用命令模式设计一个程序，模拟这个自助点餐系统的功能。

import { entry } from "../utils";

interface Command {
  execute(): void;
}

// 烤肉师傅
class Receiver {
  action(name: string) {
    console.log(`${name} is ready!`);
  }
}

// 烤羊肉串命令
class OrderCommand implements Command {
  private receiver: Receiver;
  private receiverName: string;
  constructor(receiver: Receiver, receiverName: string) {
    this.receiverName = receiverName;
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.action(this.receiverName);
  }
}

// 服务员
class Invoke {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  invokeCommand() {
    this.command.execute();
  }
}

// @ts-ignore
entry(4, (...args) => {
  args.forEach((type) => {
    const command = new OrderCommand(new Receiver(), type);
    const invoke = new Invoke(command);
    invoke.invokeCommand()
  });
})("MilkTea")("Coffee")("Cola")("MilkTea");
