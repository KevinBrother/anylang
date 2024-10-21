// 小明家有一个万能遥控器，能够支持多个品牌的电视。每个电视可以执行开机、关机和切换频道的操作，请你使用桥接模式模拟这个操作。

import { entry } from "../utils";

// 0 表示创建 Sony 品牌的电视，1 表示创建 TCL 品牌的遥控和电视；2 表示开启电视、3表示关闭电视，4表示切换频道。

// Implementor
interface ITV {
  turnOn(): void;
  turnOff(): void;
  changeChannel(): void;
}

// ConcreteImplementor
class SonyTV implements ITV {
  turnOn() {
    console.log(`Sony TV is ON`);
  }
  turnOff() {
    console.log(`Sony TV is OFF`);
  }
  changeChannel() {
    console.log(`Switching Sony TV channel`);
  }
}

class TCL_TV implements ITV {
  turnOn() {
    console.log(`TCL TV is ON`);
  }
  turnOff() {
    console.log(`TCL TV is OFF`);
  }
  changeChannel() {
    console.log(`Switching TCL TV channel`);
  }
}

// Abstraction 维护一个对实现的引用
abstract class Control {
  protected tv: ITV;
  constructor(tv: ITV) {
    this.tv = tv;
  }

  abstract operation(): void;
}

// 修正抽象 RefinedAbstraction
class PowerOperation extends Control {
  operation(): void {
    this.tv.turnOn();
  }
}

class OffOperation extends Control {
  operation(): void {
    this.tv.turnOff();
  }
}

class ChannelSwitchOperation extends Control {
  operation(): void {
    this.tv.changeChannel();
  }
}

// @ts-ignore
entry(6, (...args) => {
  let tv: ITV;
  args.forEach((item) => {
    tv = item[0] === 0 ? new SonyTV() : new TCL_TV();

    const action = item[1];
    switch (action) {
      case 2:
        new PowerOperation(tv).operation();
        break;
      case 3:
        new OffOperation(tv).operation();
        break;
      case 4:
        new ChannelSwitchOperation(tv).operation();
        break;
      default:
        console.log("invalid action");
    }
  });
})([0, 2])([1, 2])([0, 4])([0, 3])([1, 4])([1, 3]);
