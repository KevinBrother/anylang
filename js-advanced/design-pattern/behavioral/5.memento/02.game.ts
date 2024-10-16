// 小明正在设计一个简单的计数器应用，支持增加（Increment）和减少（Decrement）操作，以及撤销（Undo）和重做（Redo）操作，请你使用备忘录模式帮他实现。

// 备忘录
class RoleMemento {
  private blood: number;
  private atk: number;
  private defense: number;

  constructor(blood: number, atk: number, defense: number) {
    this.blood = blood;
    this.atk = atk;
    this.defense = defense;
  }

  getState() {
    const { blood, atk, defense } = this;
    return { blood, atk, defense };
  }
}

// 发起人(业务对象)
class GameRole {
  private blood: number;
  private atk: number;
  private defense: number;

  constructor(blood: number, atk: number, defense: number) {
    this.blood = blood;
    this.atk = atk;
    this.defense = defense;
  }

  setState(blood: number, atk: number, defense: number) {
    this.blood = blood;
    this.atk = atk;
    this.defense = defense;
  }

  createMemento() {
    const { blood, atk, defense } = this;
    return new RoleMemento(blood, atk, defense);
  }

  setMemento(memento: RoleMemento) {
    const { blood, atk, defense } = memento.getState();
    this.blood = blood;
    this.atk = atk;
    this.defense = defense;
  }

  // 通过备忘录恢复状态
  restoreFromMemento(memento: RoleMemento) {
    const { blood, atk, defense } = memento.getState();
    this.blood = blood;
    this.atk = atk;
    this.defense = defense;
  }

  show() {
    const { blood, atk, defense } = this;
    console.log(`blood: ${blood}, atk: ${atk}, defense: ${defense}, `);
    return { blood, atk, defense };
  }
}

// 管理者
class RoleStateCaretaker {
  private mementos: RoleMemento[] = [];

  constructor(memento: RoleMemento) {
    this.mementos.push(memento);
  }

  addMemento(memento: RoleMemento) {
    this.mementos.push(memento);
  }

  getMemento(i: number) {
    return this.mementos[i];
  }
}

(function () {
  let index = -1;
  let originator = new GameRole(100, 100, 100);
  originator.show();
  
  const roleStateCaretaker = new RoleStateCaretaker(originator.createMemento());
  index++;

  originator.setState(50, 50, 50);
  roleStateCaretaker.addMemento(originator.createMemento());
  index++;
  originator.show();

  originator.setState(0, 0, 0);
  originator.show();

  originator.restoreFromMemento(roleStateCaretaker.getMemento(index));
  index--;
  originator.show();

  originator.restoreFromMemento(roleStateCaretaker.getMemento(index));
  index--;
  originator.show();
})();
