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