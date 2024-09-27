// 小明所在的学校有一个时钟（主题），每到整点时，它就会通知所有的学生（观察者）当前的时间，请你使用观察者模式实现这个时钟通知系统。
// 注意点：时间从 0 开始，并每隔一个小时更新一次。

import { entry } from "../utils";

interface ISubject {
  add(observer: Student): void;
  remove(observer: Student): void;
  notify(msg: string): void;
}

interface IObserver {
  update(msg: string): void;
}

class Clock implements ISubject {
  private observers: Map<string, Student>;

  constructor() {
    this.observers = new Map();
  }

  add(observer: Student) {
    this.observers.set(observer.name, observer);
  }

  remove(observer: Student) {
    this.observers.delete(observer.name);
  }

  notify(msg: string) {
    this.observers.forEach((item) => {
      item.update(msg);
    });
  }
}

class Student implements IObserver {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(msg: string) {
    console.log(`${this.name} ${msg}`);
  }
}

// @ts-ignore
entry(2, (...args) => {
  return (time: number) => {
    const timeSubject = new Clock();
    args.forEach((item) => {
      timeSubject.add(new Student(item));
    });

    for (let i = 1; i <= time; i++) {
      timeSubject.notify(i.toString());
    }
  };
})("Alice")("Bob")(3);
