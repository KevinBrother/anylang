// 小明所在的公司请假需要在OA系统上发布申请，整个请求流程包括多个处理者，每个处理者负责处理不同范围的请假天数，如果一个处理者不能处理请求，就会将请求传递给下一个处理者，请你实现责任链模式，可以根据请求天数找到对应的处理者。

import { entry } from "../utils";

// 审批责任链由主管(Supervisor), 经理(Manager)和董事（Director)组成，他们分别能够处理3天、7天和10天的请假天数。如果超过10天，则进行否决。

interface IHandler {
  handleRequest(request: LeaveRequest): void;
}

class Supervisor implements IHandler {
  private nextHandler: IHandler;
  constructor(handler: IHandler) {
    this.nextHandler = handler;
  }

  handleRequest(request: LeaveRequest): void {
    if (request.getDays() > 3) {
      // manage.setNext(new Manager());
      this.nextHandler.handleRequest(request);
    } else {
      console.log(`${request.getName()} Approved by Supervisor`);
    }
  }
}

class Manager implements IHandler {
  private nextHandler: IHandler;
  constructor(handler: IHandler) {
    this.nextHandler = handler;
  }

  handleRequest(request: LeaveRequest): void {
    if (request.getDays() > 7) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log(`${request.getName()} Approved by Manager`);
    }
  }
}

class Director implements IHandler {
  handleRequest(request: LeaveRequest): void {
    if (request.getDays() > 10) {
      console.log(`${request.getName()} Denied by Director`);
    } else {
      console.log(`${request.getName()} Approved by Director`);
    }
  }
}

class LeaveRequest {
  private name: string;
  private days: number;

  constructor([name, days]) {
    this.name = name;
    this.days = days;
  }

  getName() {
    return this.name;
  }

  getDays() {
    return this.days;
  }
}

// @ts-ignore
entry(4, (...args) => {
  const director = new Director();
  const manager = new Manager(director);
  const supervisor = new Supervisor(manager);
  args.forEach((info) => {
    const request = new LeaveRequest(info);
    supervisor.handleRequest(request);
  });
})(["Alice", 2])(["Bob", 5])(["Tom", 10])(["Jerry", 12]);
