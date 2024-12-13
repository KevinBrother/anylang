// 小明家有两个工厂，一个用于生产圆形积木，一个用于生产方形积木，
// 请你帮他设计一个积木工厂系统，记录积木生产的信息。

interface IBlock {
  product(): void;
}

interface IFactory {
  createBlock(): IBlock;
}

class Circle implements IBlock {
  product(): void {
    console.log("Circle BLock");
  }
}

class Square implements IBlock {
  product(): void {
    console.log("Square BLock");
  }
}

class CircleFactory implements IFactory {
  createBlock(): IBlock {
    return new Circle();
  }
}

class SquareFactory implements IFactory {
  createBlock(): IBlock {
    return new Square();
  }
}

function main(count: number) {
  function dfs(...args: [string, number][]) {
    if (args.length < count) {
      return (arg) => dfs(...args, arg);
    }

    args.forEach((blockAndCount) => {
      const factory =
        blockAndCount[0] === "Circle"
          ? new CircleFactory()
          : new SquareFactory();

      for (let i = 0; i < blockAndCount[1]; i++) {
        factory.createBlock().product();
      }
    });
  }

  return dfs;
}

// @ts-ignore
main(3)(["Circle", 1])(["Square", 2])(["Circle", 1]);

export {};
