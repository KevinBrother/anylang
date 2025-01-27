#include <stdio.h>
// b是test函数的形参(形式参数)
void test(int b[]) { // 也可以写int b[3]
    b[0] = 9;
    printf("b的值 %d\n", b);
    printf("&b的地址 %d\n", &b);
}

int main()
{
    int a[3];
    a[0] = 10;
    
    printf("函数调用前的a[0]：%d\n", a[0]);
    printf("a %d\n", a);
    printf("&a %d\n", &a);
    
    test(a); // a是test函数的实参(实际参数)

    printf("函数调用后的a[0]：%d \n", a[0]);
    printf("a %d\n", a);
    return 0;
}