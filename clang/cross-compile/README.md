# 交叉编译

## arm机器中编译出 x86_64 机器的可执行文件
``` bash

# 1. 安装交叉编译工具
// sudo apt-get install gcc-arm-linux-gnueabihf
brew install gcc-arm-embedded   

# 2. 编译
arm-linux-gnueabihf-gcc -o hello hello.c


// 
clang -target x86_64-apple-macos12 -o hello_x86 hello.c

```

## 生成可执行文件

``` bash
# 1. 预处理,  预处理（Preprocessing）
# 作用：处理源代码中的预处理指令（如 #include、#define、#if 等）。
# 工具：C 预处理器（cpp）
# 输入：C 源代码文件（.c、.h）
# 输出：扩展后的源代码（.i 文件）
# 主要操作：
# 展开 #include 文件（将头文件内容插入到源文件中）。
# 替换 #define 宏定义。
# 处理条件编译指令（如 #ifdef）。
# 移除注释。
gcc -E main.c -o main.i
gcc -E add.c -o add.i

# 2. 编译为汇编
# 作用：将预处理后的源代码翻译成汇编语言。
# 工具：编译器（如 gcc、clang）
# 输入：预处理后的文件（.i）
# 输出：汇编代码（.s 文件）
# 主要操作：
# 词法分析、语法分析、语义分析。
# 代码优化（如常量折叠、循环展开）。
# 生成平台特定的汇编代码。

gcc -S main.i -o main.s
gcc -S add.i -o add.s

# 3. 汇编为目标文件
# 作用：将汇编代码转换为机器码（目标文件）。
# 工具：汇编器（如 as）
# 输入：汇编代码（.s）
# 输出：目标文件（.o 或 .obj）
# 主要操作：
# 将汇编指令翻译成二进制机器码。
# 生成符号表（记录变量和函数的地址）。
# 生成重定位表（记录需要在链接时修正的地址）。

gcc -c main.s -o main.o
gcc -c add.s -o add.o

# 4. 链接为可执行文件
# 链接（Linking）
# 作用：将多个目标文件和库文件合并成一个可执行文件。
# 工具：链接器（如 ld、lld）
# 输入：目标文件（.o）、库文件（.a、.so）
# 输出：可执行文件（.out、.exe 等）
# 主要操作：
# 符号解析：将未定义的符号（如函数调用）映射到实际地址。
# 重定位：修正代码中的地址（如函数调用的跳转地址）。
# 合并段：将多个目标文件的代码段、数据段等合并。
# 库链接：静态链接（复制库代码）或动态链接（运行时加载库）。

gcc main.o add.o -o main

# 简化版（一步完成）
gcc main.c add.c -o main
```