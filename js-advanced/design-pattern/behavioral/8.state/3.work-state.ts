// 一个人不同时间，会有不同的工作状态

// < 12 上午工作，精神百倍
// < 13 饿了，午饭; 犯困，午休
// < 17 下午状态不错，继续努力
// < 21 加班，疲累之极
//

interface IState {
  // (method) IState.handle(workContent: WorkContent): void (+1 overload)
  writeProgram(workContent: WorkContent): void;
}

class MonWork implements IState {
  writeProgram(workContent: WorkContent): void {
    if (workContent.hour > 12) {
      workContent.setState(new MiddleWork());
      workContent.request();
    } else {
      console.log(`当前时间：${workContent.hour}。 上午工作，精神百倍`);
    }
  }
}

class MiddleWork implements IState {
  writeProgram(workContent: WorkContent): void {
    if (workContent.hour > 13) {
      workContent.setState(new AfterWork());
      workContent.request();
    } else {
      console.log(`当前时间：${workContent.hour}。 饿了，午饭; 犯困，午休`);
    }
  }
}

class AfterWork implements IState {
  writeProgram(workContent: WorkContent): void {
    if (workContent.hour > 17) {
      if(workContent.workFinished) {
        workContent.setState(new RestState());
      }else {
        workContent.setState(new NightWork());
      }
      workContent.request();
    } else {
      console.log(`当前时间：${workContent.hour}。 下午状态不错，继续努力`);
    }
  }
}

class NightWork implements IState {
  writeProgram(workContent: WorkContent): void {
    console.log(`当前时间：${workContent.hour}。 加班，疲累之极`);
  }
}

class RestState implements IState {
  writeProgram(workContent: WorkContent): void {
    console.log(`当前时间：${workContent.hour}。 下班回家`);
  }
}

class WorkContent {
  private _hour: number = 0;

  public get hour(): number {
    return this._hour;
  }
  public set hour(value: number) {
    this._hour = value;
  }

  private _workFinished = false;
  public get workFinished() {
    return this._workFinished;
  }

  public set workFinished(value) {
    this._workFinished = value;
  }

  private state: IState;

  constructor(state: IState) {
    this.state = state;
  }

  setState(state: IState) {
    this.state = state;
  }

  request() {
    this.state.writeProgram(this);
  }
}

const work = new WorkContent(new MonWork());

work.hour = 9;
work.request();
work.hour = 10;
work.request();
work.hour = 12;
work.request();
work.hour = 13;
work.request();
work.hour = 14;
work.request();
work.hour = 17;
work.request();
work.workFinished = true
// work.workFinished = false;
work.hour = 19;
work.request();
work.hour = 22;
work.request();

export {};
