# 我都搜了什么

1. .C怎么运行  https://zhidao.baidu.com/question/171627961.html
    ``` bash
   gcc hello.c  // 会生成a.out
   ./a.out
    ```
    gcc默认出来的是a.out, 可以通过 -o 定制名称：gcc hello.c -o hello.out
    发现其实gcc -o 后任意的名字都可以，且都能运行

2. double怎么只输出两位小数点
   ``` C
   printf("%.2lf", num);   
   ```

3. .c和.h的区别
    2022年11月21日 10:01:04 目前理解，.c是实现，.h是接口或类型的定义

4. git项目要忽略那些文件
    .out由gcc自动生成

## 缩写：

    1. math.h 中的开平方 sqrt: squire root 的缩写  是哪个函数 
    2. stdio.h 标准输入输出： standard input/output