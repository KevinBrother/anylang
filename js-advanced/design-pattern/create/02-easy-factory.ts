// 小明家有两个工厂，一个用于生产圆形积木，一个用于生产方形积木，
// 请你帮他设计一个积木工厂系统，记录积木生产的信息。

// 简单工厂模式 通过 if、else 判断，简化了客户端。但是如果要添加新产品，需要修改工厂类代码。
type TName = "Circle" | "Square";

interface Block {
  product(): void;
}

class Circle implements Block {
  product(): void {
    console.log("Circle BLock");
  }
}

class Square implements Block {
  product(): void {
    console.log("Square BLock");
  }
}

class Factory {
  blocks: Block[] = [];
  add(type: TName, quantity: number) {
    const block = type === "Circle" ? Circle : Square;
    for (let i = 0; i < quantity; i++) {
      this.blocks.push(new block());
    }
  }

  output() {
    this.blocks.forEach((block) => {
      block.product();
    });
  }
}

const blockFactory = new Factory();

blockFactory.add("Circle", 1);
blockFactory.add("Square", 2);
blockFactory.add("Circle", 1);

blockFactory.output();

export {};
