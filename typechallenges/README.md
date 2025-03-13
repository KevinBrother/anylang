# TypeChallenges

## 重难点

### never

- 表示函数永远不会返回值( return; 为 void)

``` typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}

// void 表示不返回值的函数的返回值。但与 js 函数实际返回的 undefined 不同。
function noReturn(message: string): void {
  return;
}

```

- 表示永远不存在的值的类型

```typescript
type Fruit = 'apple' | 'banana' | 'cherry';
function handleFruit(fruit: Fruit) {
    switch (fruit) {
        case 'apple':
            console.log('This is an apple');
            break;
        case 'banana':
            console.log('This is a banana');
            break;
        case 'cherry':
            console.log('This is a cherry');
            break;
        // 这里没有default分支，因为已经穷举了所有Fruit类型的可能值
    }
    // 这里的返回值类型是never，因为不会有其他值到达这里
}
```

- never被认为是空的联合类型

``` typescript
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}
```

### extends

[Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)
在 ts 中 extends 除了有类似 es6 的 继承概念，还有

- Conditional Type Constraints （条件类型约束）

    ``` typescript
    type A = A2 extends A1 ? string : number
    
    type MessageOf<T extends { message: unknown }> = T["message"];
    ```

- Inferring Within Conditional Types （在条件类型中推断）

    ``` typescript
    type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
    ```

- Distributive Conditional Types（分布式条件类型 ）

    ``` typescript
    type ToArray<Type> = Type extends any ? Type[] : never;
    type StrArrOrNumArr = ToArray<string | number>;  // type StrArrOrNumArr = string[] | number[]
    ```

## 参考文档

- [TypeScript 类型挑战](https://github.com/type-challenges/type-challenges)
- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)
