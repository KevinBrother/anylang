// 小明是一位老师，在进行班级点名时，希望有一个学生名单系统，请你实现迭代器模式提供一个迭代器使得可以按顺序遍历学生列表

import { entry } from "../utils";

interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
}

interface IIterable<T> {
  createIterator(): IIterator<T>;
}

class NameList implements IIterator<string> {
  private idx: number;
  private nameList: string[];

  constructor(names: string[]) {
    this.nameList = names;
    this.idx = 0;
  }

  hasNext(): boolean {
    return this.idx < this.nameList.length;
  }

  next(): string {
    if (this.hasNext()) {
      return this.nameList[this.idx++];
    } else {
      throw "No more elements";
    }
  }
}

class ConcreteIterable implements IIterable<string> {
  private ele: string[];

  constructor(ele: string[]) {
    this.ele = ele;
  }

  createIterator(): IIterator<string> {
    return new NameList(this.ele);
  }
}

// @ts-ignore
entry(3, (...args) => {
  const iterator = new ConcreteIterable(args).createIterator();
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
})("Alice 1001")("Bob 1002")("Charlie 1003");
