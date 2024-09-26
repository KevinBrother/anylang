// 在一个图形编辑器中，用户可以绘制不同类型的图形，包括圆形（CIRCLE）、矩形（RECTANGLE）、三角形（TRIANGLE）等。现在，请你实现一个图形绘制程序，要求能够共享相同类型的图形对象，以减少内存占用。

import { entry } from "../utils";

interface TPos {
  x: number;
  y: number;
}

type TShapeName = "CIRCLE" | "RECTANGLE" | "TRIANGLE";

interface IShape {
  draw(pos: TPos): void;
}

class CIRCLE implements IShape {
  draw({ x, y }: TPos): void {
    console.log(`(${x}, ${y})`);
  }
}
class RECTANGLE implements IShape {
  draw({ x, y }: TPos): void {
    console.log(`(${x}, ${y})`);
  }
}
class TRIANGLE implements IShape {
  draw({ x, y }: TPos): void {
    console.log(`(${x}, ${y})`);
  }
}

class GEditor {
  shapeMap = new Map<TShapeName, IShape>();

  getShape(name: TShapeName) {
    let shape: IShape;
    if (!this.shapeMap.has(name)) {
      switch (name) {
        case "CIRCLE":
          shape = new CIRCLE();
          break;
        case "RECTANGLE":
          shape = new RECTANGLE();
          break;
        case "TRIANGLE":
          shape = new TRIANGLE();
          break;
      }
      console.log(`${name} drawn at `);
      this.shapeMap.set(name, shape);
    } else {
      console.log(`${name} shared  at `);
      shape = this.shapeMap.get(name)!;
    }
    return shape;
  }
}


// @ts-ignore
entry(6, (...args) => {
  const editor = new GEditor();
  args.forEach(([name, x, y]) => {
    editor.getShape(name).draw({ x, y });
  });
})(['CIRCLE', 10, 20])(['RECTANGLE', 30, 40])(['CIRCLE', 15, 25])(['TRIANGLE', 5, 15])(['CIRCLE', 10, 20])(['RECTANGLE', 30, 40]);
