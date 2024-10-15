// 烤肉案例

import { entry } from "../../utils";
// 命令的抽象类
abstract class Command {
  protected receiver: Receiver; // 烤肉师傅

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  abstract execute(): void;
}

// 烤肉师傅
class Receiver {
  bakeMutton() {
    console.log("烤羊肉串");
  }

  bakeChickenWing() {
    console.log("烤鸡翅");
  }

  action(name: string) {
    console.log(`${name} is ready!`);
  }
}

// 烤羊肉串命令
class BakeMuttonCommand extends Command {
  constructor(receiver: Receiver) {
    super(receiver);
  }
  execute(): void {
    this.receiver.bakeMutton();
  }
}
// 烤鸡翅命令
class BakeCheckingWingCommand extends Command {
  constructor(receiver: Receiver) {
    super(receiver);
  }
  execute(): void {
    this.receiver.bakeChickenWing();
  }
}

// 服务员
class Invoke {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  setOrder(command: Command) {
    this.command = command;
  }

  invokeCommand() {
    this.command.execute();
  }
}

// @ts-ignore
entry(4, (...args) => {
  // 开店前的准备, 提前准备好烤肉师傅和服务员
  const boy = new Receiver();
  // const bakeMutton1 = new BakeMuttonCommand(boy);
  // const bakeMutton2 = new BakeMuttonCommand(boy);
  // const bakeChickenWing = new BakeCheckingWingCommand(boy)
  let girl: Invoke;
  let command: Command;

  args.forEach((type) => {
    if (type === "bakeMutton") {
      command = new BakeMuttonCommand(boy);
    } else {
      command = new BakeCheckingWingCommand(boy);
    }

    if (!girl) {
      girl = new Invoke(command);
      girl.invokeCommand();
    } else {
      girl.setOrder(command);
      girl.invokeCommand();
    }
  });
})("bakeMutton")("Coffee")("Cola")("bakeMutton");
