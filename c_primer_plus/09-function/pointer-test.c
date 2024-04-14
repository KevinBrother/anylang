#include <stdio.h>

int main() {
    int p = 1;
    int *ptr = &p;

    int *uninit_ptr; // 未初始化的指针
    int *uninit_ptr2; // 未初始化的指针

    printf("*ptr = %d\n", *ptr);
    printf("ptr 中存储的值，即 p 的内存地址= %p\n", ptr);
    printf("&ptr： 代表变量 ptr 变量在内存中的地址= %p\n", &ptr);
    printf("uninit_ptr： 未初始化的指针= %p \n", uninit_ptr );
    printf("uninit_ptr2： 未初始化的指针= %p \n", uninit_ptr2);

/* 
    无法解引用未初始化的指针
    printf("*uninit_ptr = %d\n", *uninit_ptr);
*/ 

    return 0;
}