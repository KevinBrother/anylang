// 小明想要购买一套房子，他决定寻求一家房屋中介来帮助他找到一个面积超过100平方米的房子，
// 只有符合条件的房子才会被传递给小明查看。
import { entry } from "../utils";

interface IHouse {
  sail(area: number): void;
}

class RealHouse implements IHouse {
  sail() {
    console.log("Yes");
  }
}

class MProxy implements IHouse {
  private realHouse = new RealHouse();

  sail(area: number) {
    if (area < 100) {
      console.log("NO");
      return;
    }

    this.realHouse.sail();
  }
}

// @ts-ignore
entry(3, (...args) => {
  const proxy = new MProxy();
  args.forEach((item) => {
    proxy.sail(item);
  });
})(120)(80)(110);
