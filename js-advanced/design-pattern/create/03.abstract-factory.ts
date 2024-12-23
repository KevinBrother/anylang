// 小明家新开了两个工厂用来生产家具，
// 一个生产现代风格的沙发和椅子，
// 一个生产古典风格的沙发和椅子，现在工厂收到了一笔订单，请你帮他设计一个系统，描述订单需要生产家具的信息。

type TType = "classical" | "modern";

interface IChair {
  productChair();
}
interface ISofa {
  productSofa();
}

interface IFactory {
  createSofa(): ISofa;
  createChair(): IChair;
}

class ModernSofa implements ISofa {
  productSofa() {
    console.log("modern sofa");
  }
}

class ModernChair implements IChair {
  productChair() {
    console.log("modern chair");
  }
}

class ClassicalSofa implements ISofa {
  productSofa() {
    console.log("classical sofa");
  }
}

class ClassicalChair implements IChair {
  productChair() {
    console.log("classical chair");
  }
}

class ModernFactory implements IFactory {
  createChair(): IChair {
    return new ModernChair();
  }
  createSofa(): ISofa {
    return new ModernSofa();
  }
}

class ClassicalFactory implements IFactory {
  createChair(): IChair {
    return new ClassicalChair();
  }
  createSofa(): ISofa {
    return new ClassicalSofa();
  }
}

function main(count: number) {
  const classicalFactory = new ClassicalFactory();
  const modernFactory = new ModernFactory();

  function dfs(...args: TType[]) {
    if (args.length === count) {
      args.forEach((type) => {
        const facotry = type === "classical" ? classicalFactory : modernFactory;
        facotry.createChair().productChair();
        facotry.createSofa().productSofa();
      });
    } else {
      return (arg) => dfs(...args, arg);
    }
  }
  return dfs;
}

// @ts-ignore
main(3)("modern")("classical")("modern");

export {}
