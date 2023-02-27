# C++ Primer plus书中的案例

## 调用步骤

1.

``` bash
// 生成可执行文件：a.out
g++ xxx.cpp
// 运行可执行文件
./a.out
```

## question

[x] int is  4 bytes

- 那int 能定义的最长长度是多少位？目前测试下来是9位。为什么？
- 4字节就是32位总数值为2到32次方为 4294967296，所以无标记整数的范围是0 ～ 4294967295 [limit](./03.handle-data/01.limits.cpp)

[ ]- 在函数外部给全局变量赋值，会报错？？
  [enum](./04.composite-type/06.enum.cpp)
  [此声明没有存储类或类型说明符](https://blog.csdn.net/qq_34911636/article/details/93162912)

[ ] - [char 类型的指针变量输出的内存地址为什么乱码](./questionn/char-pointer.cpp)？
