// 10.4.1章节

#include <stdio.h>

int data[2] = {100,200};

int moreData[2] = {300,400};

// 一元运算符 * 和 ++ 的优先级相同，但结合律是从右往左。
int main(void) {

    int *p1, *p2, *p3;

    p1 = p2 = data;
    p3 = moreData;

    printf("*p1 = %d, *p2 = %d, *p3 = %d\n", *p1, *p2, *p3);
    printf("*p1++ = %d, *++p2 = %d, (*p3)++ = %d\n", *p1++, *++p2, (*p3)++);
    printf("*p1 = %d, *p2 = %d, *p3 = %d\n", *p1, *p2, *p3);
    return 0;
}

