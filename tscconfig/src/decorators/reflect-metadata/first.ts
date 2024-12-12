import "reflect-metadata";

// Reflect.metadata(key, value)：这是一个装饰器工厂函数，用于将 元数据 (metadata) 附加到类、方法、属性或参数上。
// Reflect.getMetadata(key, target)：用于从目标对象（类、方法、属性或参数）中 获取元数据。
// Reflect.metadata 使用 WeakMap 来存储元数据，确保不会影响垃圾回收（GC）和内存管理。

@Reflect.metadata("inClass", "A")
class Test {
  @Reflect.metadata("inMethod", "B")
  public hello(): string {
    return "hello world";
  }
}

// 上面的存储结构图
const metadataStore = {
  Test: {
    inClass: "A",
    prototype: {
      hello: {
        inMethod: "B",
      },
    },
  },
};

// 实现的核心逻辑
function metadata(metadataKey: string, metadataValue: any) {
  return function (target: any, propertyKey: string) {
    if (!propertyKey) {
      // 类装饰器
      Reflect.defineMetadata(metadataKey, metadataValue, target);
    } else {
      // 方法/属性装饰器
      Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);
    }
  };
}

console.log(Reflect.getMetadata("inClass", Test)); // 'A'
console.log(Reflect.getMetadata("inMethod", new Test(), "hello")); // 'B'
