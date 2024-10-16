// 小明家的电源总开关控制了家里的三个设备：空调、台灯和电视机。
// 每个设备都有独立的开关密码，分别用数字1、2和3表示。即输入1时，空调关闭，输入2时，台灯关闭，输入3时，电视机关闭，当输入为4时，表示要关闭所有设备。
// 请你使用外观模式编写程序来描述电源总开关的操作。

import { entry } from "../utils";

class AirCondition {
  turnOff() {
    console.log("Air Conditioner is turned off.");
  }
}

class DeskLamp {
  turnOff() {
    console.log("Desk Lamp is turned off.");
  }
}

class Television {
  turnOff() {
    console.log("Television is turned off.");
  }
}

class DeviceFacade {
  private airCondition = new AirCondition();
  private deskLamp = new DeskLamp();
  private television = new Television();

  turnOff(count: number) {
    switch (count) {
      case 1:
        this.airCondition.turnOff();
        break;
      case 2:
        this.deskLamp.turnOff();
        break;
      case 3:
        this.television.turnOff();
        break;
      case 4:
        console.log("All devices are off.");
        break;
      default:
        console.log("Invalid device code");
    }
  }
}

// @ts-ignore
entry(4, (...args) => {
  const deviceFacade = new DeviceFacade();
  args.forEach((item) => {
    deviceFacade.turnOff(item);
  });
})(1)(2)(3)(4);
