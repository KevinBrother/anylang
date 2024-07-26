# 存储类别、链接和内存管理

## 存储类别

### extern ()

extern 声明用来声明一个变量或函数，但不定义它。它告诉编译器，这个变量或函数在别的文件中定义。

```c
extern int x;
```

### static

static 声明用来声明一个变量或函数，但只在当前文件中有效。它告诉编译器，这个变量或函数只在当前文件中可见，其他文件中不可见。


```c
static int x = 10;
```


### auto

auto 声明用来声明一个局部变量，它只能在当前代码块中有效。它告诉编译器，这个变量的生命周期只在当前代码块中，当代码块结束时，变量就会被销毁。


```c
int main() {
    auto int x = 10;
    return 0;
}
```

### register

register 声明用来声明一个局部变量，它只能在当前代码块中有效。它告诉编译器，这个变量的存储位置应该尽量靠近它被使用的地方。


```c
int main() {
    register int x = 10;
    return 0;
}
```

## 链接

### 静态链接

静态链接是指将所有的代码和数据都链接到一个可执行文件中，这样可以使得可执行文件更小，更容易部署和运行。

静态链接的优点是简单、快速，缺点是可执行文件体积大，运行速度慢。
// TODO 静态链接案例

### 动态链接

动态链接是指将程序运行时所需的库文件动态加载到内存中，这样可以节省内存，提高程序的运行速度。

动态链接的优点是运行速度快，缺点是程序运行前需要先加载库文件，增加了程序的复杂度。
// TODO 动态链接案例

## 内存管理

### 堆和栈

堆和栈是两种内存管理方式。

栈是一种先进后出（Last In First Out，LIFO）的存储方式，它用来存储局部变量、函数参数、返回地址等。栈的大小是固定的，一般为1MB或2MB。

堆是一种动态分配的存储方式，它用来存储动态分配的内存，比如malloc()函数分配的内存。堆的大小可以根据程序的需要动态调整。

### 内存分配

内存分配是指在堆或栈上为变量分配内存空间。

在堆上分配内存使用malloc()函数，在栈上分配内存使用alloca()函数或alloca()宏。

### 内存释放

内存释放是指释放堆或栈上分配的内存空间。

在堆上释放内存使用free()函数，在栈上释放内存使用alloca()函数或alloca()宏。

### 内存泄漏

内存泄漏是指程序运行过程中分配的内存不能被释放，导致系统内存资源的不足，最终导致系统崩溃。

内存泄漏的原因有很多，比如：

- 内存分配不当，比如分配了内存但没有释放；
- 内存分配过多，比如分配了过多的内存，导致系统内存资源不足；
- 内存泄漏的库函数没有正确处理内存，比如fopen()函数没有关闭文件句柄；
- 内存泄漏的全局变量没有被正确释放，导致内存泄漏；
- 内存泄漏的静态变量没有被正确释放，导致内存泄漏；
- 内存泄漏的临时变量没有被正确释放，导致内存泄漏；
- 内存泄漏的循环没有正确退出，导致内存泄漏；
- 内存泄漏的指针没有被正确释放，导致内存泄漏；
- 内存泄漏的结构体没有被正确释放，导致内存泄漏；
- 内存泄漏的类没有被正确释放，导致内存泄漏；
- 内存泄漏的异常没有被正确处理，导致内存泄漏；
- 内存泄漏的信号没有被正确处理，导致内存泄漏；
- 内存泄漏的线程没有被正确释放，导致内存泄漏；
- 内存泄漏的堆栈没有被正确释放，导致内存泄漏；
- 内存泄漏的共享内存没有被正确释放，导致内存泄漏；
- 内存泄漏的数据库连接没有被正确关闭，导致内存泄漏；
- 内存泄漏的网络连接没有被正确关闭，导致内存泄漏；
- 内存泄漏的线程局部存储（TLS）没有被正确释放，导致内存泄漏；
- 内存泄漏的堆栈变量没有被正确释放，导致内存泄漏；
- 内存泄漏的共享内存段没有被正确释放，导致内存泄漏；