#include <stdio.h>

int main() {
    int p = 1;
    int *ptr = &p;

    printf("*ptr = %d\n", *ptr);
    printf("ptr 中存储的值，即 p 的内存地址= %p\n", ptr);
    printf("&ptr： 代表变量 ptr 变量在内存中的地址= %p\n", &ptr);
}