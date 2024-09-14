// 小明家有两个工厂，一个用于生产圆形积木，一个用于生产方形积木，
// 请你帮他设计一个积木工厂系统，记录积木生产的信息。

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
  woods: Block[] = [];
  add(type: Block, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this.woods.push(new type());
    }
  }

  output() {
    this.woods.forEach((wood) => {
      console.log(`${wood.name} Block`);
    });
  }
}

const blockFactory = new Factory();

blockFactory.add("Circle", 1);
blockFactory.add("Square", 2);
blockFactory.add("Circle", 1);

blockFactory.output();
