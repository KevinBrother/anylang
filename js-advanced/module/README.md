# esm 与 cjs 结果对比

## 测试步骤

- 安装依赖

``` bash
pnpm i 
```

### 运行测试

- ESM 运行测试

``` bash
yarn run:esm
```

- CommonJS 运行测试

``` bash
yarn run:cjs
```

### 编译测试

- ESM 编译测试

``` bash
yarn build:esm
```

- CommonJS 编译测试

``` bash
yarn build:cjs
```

## 总结

### CommonJS 模块是运行时加载，ES6 模块是编译时异步输出接口

- esm 的 import 和 export 是 es6 语法的关键字，编译阶段已经确定了导入的模块
- cjs 的 require 和 module.exports 是 cjs 语法的关键字，是自己实现的，是运行时加载（类似直接把导入的模块代码复制到当前文件中，类似C语言的宏替换），运行阶段才确定导入的模块

### CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用

- cjs 的 module.exports 是值的拷贝,和大部分语言的函数传递指针类似，普通类型作为函数的参数则拷贝值，对象类型作为函数的参数则拷贝指针。
- esm 的 export 是值的引用，类似 C++ 的引用传递 `void change(int & n){ n = 100; }`，函数内部对 n 的修改会影响到外部的 n。

## 参考文档

[深入浅出 ESM 模块 和 CommonJS 模块](https://github.com/WangYuLue/esm_commonjs)
