#include <stdio.h>

int main() {
    int urn[5] = {100, 200, 300, 400, 500};

    int *ptr1, *ptr2 , *ptr3;
    ptr1 = urn; // 把一个地址赋给指针
    ptr2 = &urn[2]; // 把一个地址赋给指针

    // 解引用指针，以及获得指针的地址
    printf("pointer value, dereferenced pointer, pointer address: \n");
    printf("urn = %p, *urn = %d, &urn = %p\n", urn, *urn, &urn);
    printf("ptr1 = %p, *ptr1 = %d, &ptr1 = %p\n", ptr1, *ptr1, &ptr1);

    // 指针加法
    ptr3 = ptr1 + 4;

    printf("\n adding an int to a pointer: \n");
    printf("&urn[4] = %p, *(urn + 4) = %d\n", &urn[4], *(urn + 4));
    printf("ptr1 + 4 = %p, *(ptr1 + 4) = %d\n", ptr1+4, *(ptr1 + 4));

    ptr1++; // 指针自增
    printf("\n values after ptr1++:\n");
    printf("ptr1++ = %p, *ptr1 = %d &ptr1 = %p\n", ptr1, *ptr1, &ptr1);
    ptr2--; // 指针自减
    printf("\n values after ptr2--:\n");
    printf("ptr2-- = %p, *ptr2 = %d &ptr2 = %p\n", ptr2, *ptr2, &ptr2);
    
    --ptr1; // 恢复为初始值
    printf("\n Pointers reset to original values:\n");
    printf("ptr1 = %p, *ptr1 = %d &ptr1 = %p\n", ptr1, *ptr1, &ptr1);

    ++ptr2; // 恢复为初始值
    printf("ptr2 = %p, *ptr2 = %d &ptr2 = %p\n", ptr2, *ptr2, &ptr2);

    // 一个指针减去另一个指针
    printf("\n subtracting one pointer from another:\n");
    printf("ptr2 = %p, ptr1 = %p, ptr2 - ptr1 = %td\n", ptr2, ptr1, ptr2 - ptr1); // 当前两个指针指向的元素相隔两个int 而不是2个字节

    // 一个指针减去一个整数
    printf("\n subtracting a int from a pointer:\n");
    printf("ptr3 = %p, ptr3 - 2 = %p\n", ptr3, ptr3 - 2);

    return 0;

}


void error() {
    // 系统值分配了存储指针本身的内存，但是没有分配指针指向的内存，所以不能对指针进行解引用
    // 系统值分配了存储指针本身的内存，但是没有分配存储数据的内存。
    int *p; // 可以使用 一个现有变量的地址初始化该指针，或使用 malloc() 函数先分配内存。
    *p = 5; // 错误，试图对一个空指针解引用

}