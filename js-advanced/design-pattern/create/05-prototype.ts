// 公司正在开发一个图形设计软件，其中有一个常用的图形元素是矩形。
// 设计师在工作时可能需要频繁地创建相似的矩形，而这些矩形的基本属性是相同的（颜色、宽度、高度），
// 为了提高设计师的工作效率，请你使用原型模式设计一个矩形对象的原型。使用该原型可以快速克隆生成新的矩形对象。

interface Prototype {
  getDetail(): string;
  clone(): Prototype;
}

class Rectangle implements Prototype {
  color: string;
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;
  }

  // 按实际需要实现 深拷贝或浅拷贝
  clone(): Rectangle {
    return new Rectangle(this.color, this.width, this.height);
  }

  getDetail(): string {
    return `color: ${this.color},  width: ${this.width},  height: ${this.height}`;
  }
}

function main(color: string, width: number, height: number) {
  const rectangle = new Rectangle(color, width, height);

  return function cpNumber(count: number) {
    for (let i = 0; i < count; i++) {
      console.log(rectangle.clone().getDetail());
    }
  };
}

main("Red", 10, 5)(3);

export {}