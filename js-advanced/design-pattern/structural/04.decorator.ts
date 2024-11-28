// 小明喜欢品尝不同口味的咖啡，他发现每种咖啡都可以加入不同的调料，比如牛奶、糖和巧克力。他决定使用装饰者模式制作自己喜欢的咖啡。
// 请设计一个简单的咖啡制作系统，使用装饰者模式为咖啡添加不同的调料。系统支持两种咖啡类型：黑咖啡（Black Coffee）和拿铁（Latte）。

import { entry } from "../utils";

interface ICoffee {
  cOperation(): void;
}

interface IDecorator {
  dOperation(): void;
}

class BlackCoffee implements ICoffee {
  cOperation(): void {
    console.log("Black Coffee");
  }
}

class LatteCoffee implements ICoffee {
  cOperation(): void {
    console.log("Latte");
  }
}

abstract class Decorator implements ICoffee {
  protected coffee: ICoffee;
  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }

  cOperation(): void {
    this.coffee.cOperation();
  }
}

class MilkCoffee extends Decorator {
  dOperation(): void {
    super.cOperation();
    console.log("adding Milk");
  }
}

class SugarCoffee extends Decorator {
  dOperation(): void {
    super.cOperation();
    console.log("adding Sugar");
  }
}

// @ts-ignore
entry(2, (...args) => {
  let coffee: ICoffee;
  let decorator: IDecorator;

  args.forEach((item) => {
    coffee = item[0] === 1 ? new BlackCoffee() : new LatteCoffee();
    decorator = item[1] === 1 ? new MilkCoffee(coffee) : new SugarCoffee(coffee);
    decorator.dOperation();
  });
})([1, 1])([2, 2]);
