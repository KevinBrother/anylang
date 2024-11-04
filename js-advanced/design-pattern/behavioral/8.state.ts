// 小明家有一个灯泡，刚开始为关闭状态（OffState）。
// 台灯可以接收一系列的指令，包括打开（"ON"）、关闭（"OFF"）和闪烁（"blink"）。每次接收到一个指令后，台灯会执行相应的操作，并输出当前灯泡的状态。请设计一个程序模拟这个灯泡系统。

// import { entry } from "../utils";

interface IState {
  handle();
}

class OnState implements IState {
  handle() {
    console.log("Light is ON");
  }
}

class OffState implements IState {
  handle() {
    console.log("Light is OFF");
  }
}

class BlinkState implements IState {
  handle() {
    console.log("Light is Blinking");
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
    return this.currentState.handle();
  }
}

// @ts-ignore
entry(5, (...args) => {
  const classMap = {
    ON: OnState,
    OFF: OffState,
    BLINK: BlinkState,
  };

  let state = new StateContext(new OffState());
  args.forEach((item) => {
    state.setState(new classMap[item]());
    state.getHandle();
  });
})("ON")("OFF")("BLINK")("OFF")("ON");

function entry(count: number, fn: (...args: any) => void) {
  function dfs(...args) {
    if (args.length < count) {
      return (arg) => dfs(...args, arg);
    }

    return fn(...args);
  }
  return dfs;
}
