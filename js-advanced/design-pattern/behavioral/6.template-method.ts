// 小明喜欢品尝不同类型的咖啡，她发现每种咖啡的制作过程有一些相同的步骤，他决定设计一个简单的咖啡制作系统，使用模板方法模式定义咖啡的制作过程。系统支持两种咖啡类型：美式咖啡（American Coffee）和拿铁（Latte）。

import { entry } from "../utils";

// 咖啡制作过程包括以下步骤：

// 1. 研磨咖啡豆 Grinding coffee beans

// 2. 冲泡咖啡 Brewing coffee

// 3. 添加调料 Adding condiments

// 其中，美式咖啡和拿铁的调料添加方式略有不同, 拿铁在添加调料时需要添加牛奶Adding milk

abstract class AbstractTemplate {
  coffeeName: string;

  constructor(coffee: string) {
    this.coffeeName = coffee;
  }
  templateMethod() {
    console.log(`Making ${this.coffeeName}:`);
    this.grindingCoffeeBeans();
    this.brewingCoffee();
    this.addingCondiments();
    console.log();
  }

  abstract grindingCoffeeBeans(): void;
  abstract brewingCoffee(): void;
  abstract addingCondiments(): void;
}

class AmericaCoffee extends AbstractTemplate {
  constructor() {
    super("American Coffee");
  }

  grindingCoffeeBeans(): void {
    console.log("Grinding coffee beans");
  }

  brewingCoffee(): void {
    console.log("Brewing coffee");
  }

  addingCondiments(): void {
    console.log("Adding condiments");
  }
}
class Latte extends AbstractTemplate {
  constructor() {
    super("Latte");
  }

  grindingCoffeeBeans(): void {
    console.log("Grinding coffee beans");
  }

  brewingCoffee(): void {
    console.log("Brewing coffee");
  }

  addingCondiments(): void {
    console.log("Adding milk");
    console.log("Adding condiments");
  }
}

// @ts-ignore
entry(2, (...args) => {
  args.forEach((type) => {
    let coffee: AbstractTemplate;
    if (type === 1) {
      coffee = new AmericaCoffee();
    } else if (type === 2) {
      coffee = new Latte();
    } else {
      throw "type error";
    }

    coffee.templateMethod();
  });
})(1)(2);
