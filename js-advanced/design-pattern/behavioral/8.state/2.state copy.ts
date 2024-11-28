// 小明家有一个灯泡，刚开始为关闭状态（OffState）。
// 台灯可以接收一系列的指令，包括打开（"ON"）、关闭（"OFF"）和闪烁（"blink"）。每次接收到一个指令后，台灯会执行相应的操作，并输出当前灯泡的状态。请设计一个程序模拟这个灯泡系统。

import { entry } from "../../utils";

interface IState {
  turnOn(): OnState | null;
  turnOff(): OffState | null;
  turnBlink(): BlinkState | null;
}

class OnState implements IState {
  // 可以关、闪烁

  turnOn() {
    console.log("当前已经是打开状态");
    return null;
  }

  turnOff(): OffState {
    console.log("Light is ON");
    return new OffState();
  }
  turnBlink(): BlinkState {
    console.log("Light is Blinking");
    return new BlinkState();
  }
}

class OffState implements IState {
  // 可以开

  turnOn() {
    console.log("Light is ON");
    return new OnState();
  }

  turnOff() {
    console.log("当前已经是关闭状态");
    return null;
  }

  turnBlink() {
     console.log("Light is Blinking");
    return new BlinkState();
  }
}

class BlinkState implements IState {
  // 可以关
  turnOn() {
    console.log("当前已经是打开状态");
    return null;
  }

  turnOff() {
    console.log("Light is OFF");
    return new OffState();
  }
  turnBlink() {
    console.log("当前已经是闪烁状态");
    return null;
  }
}

class StateContext {
  private currentState: IState;

  constructor(state) {
    this.currentState = state;
  }

  setState(state: IState) {
    this.currentState = state;
  }

  getHandle() {
    return this.currentState;
  }
}

// @ts-ignore
entry(5, (...args) => {
  const fnMap = {
    ON: "turnOn",
    OFF: "turnOff",
    BLINK: "turnBlink",
  };

  let state = new StateContext(new OffState());
  args.forEach((item) => {
    const handle = state.getHandle();
    const method = fnMap[item];
    const next = handle[method]();
    if (next) {
      state.setState(next);
    }
  });
})("ON")("OFF")("BLINK")("OFF")("ON");
