// 小明正在设计一个简单的计数器应用，支持增加（Increment）和减少（Decrement）操作，以及撤销（Undo）和重做（Redo）操作，请你使用备忘录模式帮他实现。

import { entry } from "../../utils";

// 备忘录
class Memento {
  private state: string;

  getState() {
    return this.state;
  }

  constructor(state: string) {
    this.state = state;
  }
}

// 发起人
class Originator {
  private state: string;
  constructor(state: string) {
    this.state = state;
  }

  setState(state: string) {
    this.state = state;
  }

  createMemento() {
    return new Memento(this.state);
  }

  setMemento(memento: Memento) {
    this.state = memento.getState();
  }

  // 通过备忘录恢复状态
  restoreFromMemento(memento: Memento) {
    this.state = memento.getState();
  }

  show() {
    console.log(this.state);
  }
}

// // 管理者
// class Caretaker {
//   private mementos: Memento[] = [];
//   addMemento(memento: Memento) {
//     this.mementos.push(memento);
//   }

//   getMemento(idx: number) {
//     //   return this.mementos.
//   }
// }

// 管理者
class Caretaker {
  private memento: Memento;

  constructor(memento: Memento) {
    this.memento = memento;
  }

  addMemento(memento: Memento) {
    this.memento = memento;
  }

  getMemento() {
    return this.memento;
  }
}

(function () {
  let originator = new Originator("on");
  originator.show();

  const caretaker = new Caretaker(originator.createMemento())
  originator.setState('off');
  originator.show();

  originator.setMemento(caretaker.getMemento());
  originator.show();
})();


