# 我都搜了什么

## 文档

[菜鸟教程](https://www.runoob.com/cprogramming/c-tutorial.html)

## windows的环境配置

有多种方式
第一种，直接安装到系统内
[windows10下搭建C语言开发环境](https://www.jianshu.com/p/1d197e2487a1)
[下载WinGw](https://sourceforge.net/projects/mingw/)
第二种，安装到git bash内，这种方式可以替代第一种（推荐）
[git bash安装gcc](https://zhuanlan.zhihu.com/p/149305469)
第三中，安装到wsl中
[WSL安装](https://zhuanlan.zhihu.com/p/90173113)
[wsl安装gcc]()
第四种，待尝试
[GIT的社区维护版本，带了msys2](https://github.com/git-for-windows/git/wiki/Install-inside-MSYS2-proper)

1. .C怎么运行  <https://zhidao.baidu.com/question/171627961.html>
    编译并执行C程序(bash不能识别.out结尾的文件，所以需要制定 文件名生成)

    ``` bash
# gcc hello.c  # 编译会生成a.out
#./ a.out #执行
   gcc hello.c -o hello
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

## 缩写

1. math.h 中的开平方 sqrt: squire root 的缩写  是哪个函数
2. stdio.h 标准输入输出： standard input/output

## 程序名字与变化过程

源代码（C/C++）、编译器(可移植性的原因)、目标语言（机器语言）、启动代码（startup code）、库代码(别人写好直接调用的函数库)、链接程序（目标代码、启动代码、库代码合并在一起的程序）、可执行代码（可以被系统运行的）

源代码通过编译器变为目标代码，在通过链接程序，把目标代码、启动代码、库代码组合起来，就变成了可执行代码。

## 链接
链接 hello.c和sum
``` bash
gcc hello.c sum.c
```