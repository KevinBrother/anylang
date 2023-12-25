#include <stdio.h>

int main(int argc, char const *argv[])
{
    /* code */

    int a = 10;

    // 先定义后初始化
    int *p; // 这儿的 * 只是说明p是一个指针变量
    p = &a;



    // 在定义的同时初始化
    int *p2 = &a;

    // 能定义成功(其实是错误的)，但是不能使用 *p3的方式作为间接变量使用
    int *p3 = a;

    printf("&a: %d\n", &a);
    printf("p: %d\n", p);
    printf("*p: %d\n", *p); // 这儿的 * 代表指针运算符，获取当前指针的值
    printf("&p: %d\n", &p);
    printf("&p3: %d\n", &p3);
    printf("p3: %d\n", p3);
    // printf("*p3: %d\n", *p3);

    *p = 9;
    printf("a: %d\n", a);
    return 0;
}
