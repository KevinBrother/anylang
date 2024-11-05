// 如果账户中余额大于或等于0，则账户的状态为正常状态（Normal State）​，此时用户既可以向该账户存款也可以从该账户取款
// 如果账户中余额小于0，并且大于-2000，则账户的状态为透支状态（Overdraft State）​，此时用户既可以向该账户存款也可以从该账户取款，但需要按天计算利息
// 如果账户中余额等于-2000，那么账户的状态为受限状态（Restricted State）​，此时用户只能向该账户存款，不能再从中取款，同时也将按天计算利息。
// 根据余额的不同，以上3种状态可发生相互转换

interface IState {
  take();
  put();
}

class NormalState implements IState {
  take() {}

  put() {}
}
class OverdraftState implements IState {
  take() {}

  put() {}
}
class RestrictedState implements IState {
  take() {}

  put() {}
}

class Bank {
  amount: number = 0;
  private state: IState;

  constructor(state: IState) {
    this.state = state;
  }

  take() {
    this.state.take();
  }

  put() {
    this.state.put();
  }
}

export {};
