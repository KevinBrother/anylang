// 小明正在设计一个简单的多人聊天室系统，有多个用户和一个聊天室中介者，用户通过中介者进行聊天，请你帮他完成这个系统的设计。

import { entry } from "../utils";

abstract class Colleague {
  private name: string;

  get cname() {
    return this.name;
  }

  constructor(name: string) {
    this.name = name;
  }

  send(msg: string) {
    console.log(`${this.name} received: ${msg}`);
  }
}

abstract class Mediator {
  protected colleagues: Colleague[] = [];

  constructor(...colleagues: Colleague[]) {
    this.addColleague(...colleagues);
  }

  addColleague(...colleagues: Colleague[]) {
    this.colleagues.push(...colleagues);
  }

  abstract notify(name: string, msg: string): void;
}

class ChatRoomMediator extends Mediator {
  constructor(...colleagues: Colleague[]) {
    super(...colleagues);
  }

  notify(name: string, msg: string) {
    this.colleagues.forEach((item) => {
      if (item.cname !== name) {
        item.send(msg);
      }
    });
  }
}

class UserColleague extends Colleague {
  constructor(name: string) {
    super(name);
  }
}

// @ts-ignore
entry(3, (...args) => {
  const chatRoom = new ChatRoomMediator();
  args.forEach((uname) => {
    chatRoom.addColleague(new UserColleague(uname));
  });

  function dfs([name, msg]: [string, string]) {
    chatRoom.notify(name, msg);
    return dfs;
  }

  return dfs;
})("User1")("User2")("User3")(["User1", "Hello_All!"])(["User2", "Hi_User1!"])([
  "User3",
  "How_is_everyone?",
]);
