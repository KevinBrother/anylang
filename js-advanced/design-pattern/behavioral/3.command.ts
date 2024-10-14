// 小明去奶茶店买奶茶，他可以通过在自助点餐机上来点不同的饮品，请你使用命令模式设计一个程序，模拟这个自助点餐系统的功能。

import { entry } from "../utils";

abstract class Command {
  protected receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  abstract execute(): void;
}

class Receiver {
  milkTea() {
    console.log("MileTea is Ready!");
  }
  coffee() {
    console.log("Coffee is Ready!");
  }
  cola() {
    console.log("Cola is Ready!");
  }
}

class MileTeaCommand extends Command {
  constructor(receiver: Receiver) {
    super(receiver);
  }

  execute(): void {
    this.receiver.milkTea();
  }
}
class CoffeeCommand extends Command {
  constructor(receiver: Receiver) {
    super(receiver);
  }

  execute(): void {
    this.receiver.coffee();
  }
}
class ColaCommand extends Command {
  constructor(receiver: Receiver) {
    super(receiver);
  }

  execute(): void {
    this.receiver.cola();
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
  const machine = new Receiver();
  let waiter: Invoke;
  let command: Command;

  args.forEach((type) => {
    if (type === "MilkTea") {
      command = new MileTeaCommand(machine);
    } else if (type === "Coffee") {
      command = new CoffeeCommand(machine);
    } else if (type === "Cola") {
      command = new ColaCommand(machine);
    }

    if (!waiter) {
      waiter = new Invoke(command);
      waiter.invokeCommand();
    } else {
      waiter.setOrder(command);
      waiter.invokeCommand();
    }
  });
})("MilkTea")("Coffee")("Cola")("MilkTea");
