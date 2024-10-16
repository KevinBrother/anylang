// 小明正在设计一个简单的计数器应用，支持增加（Increment）和减少（Decrement）操作，以及撤销（Undo）和重做（Redo）操作，请你使用备忘录模式帮他实现。

class CounterMemento {
  private state: number;

  constructor(state: number) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class Counter {
  private state: number;
  private redoAction = "";
  private counterCaretaker: CounterCaretaker;
  constructor(state: number, counterCaretaker: CounterCaretaker) {
    this.state = state;
    this.counterCaretaker = counterCaretaker;
  }

  increment() {
    this.counterCaretaker.addMemento(new CounterMemento(this.state));
    this.state += 1;
    this.redoAction = "INCREMENT";
  }

  decrement() {
    this.counterCaretaker.addMemento(new CounterMemento(this.state));
    this.state -= 1;
    this.redoAction = "DECREMENT";
  }

  undo() {
    const state = this.counterCaretaker.getMemento()?.getState();
    if (state) {
      this.state = state;
    }
    this.redoAction = "UNDO";
  }

  // 这里实现的是重复上一次执行的命令
  redo() {
    if (this.redoAction === "INCREMENT") {
      this.increment();
    } else if (this.redoAction === "DECREMENT") {
      this.decrement();
    } else if (this.redoAction === "UNDO") {
      this.undo();
    } else {
      throw "error action";
    }
  }

  createMemento() {
    return new CounterMemento(this.state);
  }

  setMemento(memento: CounterMemento) {
    this.state = memento.getState();
  }

  restoreFromMemento(memento: CounterMemento) {
    this.state = memento.getState();
  }

  show() {
    console.log(this.state);
  }
}

class CounterCaretaker {
  private actionStack: CounterMemento[] = [];

  addMemento(memento: CounterMemento) {
    this.actionStack.push(memento);
  }

  getMemento() {
    return this.actionStack.pop();
  }
}

(function () {
  const caretaker = new CounterCaretaker();
  let originator = new Counter(0, caretaker);

  (function doIt(action: string) {
    originator[action]();
    originator.show();

    return doIt;
  })("increment")("increment")("decrement")("undo")("redo")("increment");
})();
