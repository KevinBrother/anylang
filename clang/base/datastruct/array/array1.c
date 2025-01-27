#include <stdio.h>
// b是test函数的形参(形式参数)
void test(int b) {
    b = 9;
}

int main()
{
    int a[3];
    a[0] = 10;
    
    printf("函数调用前的a[0]：%d\n", a[0]);
    
    test(a[0]); // a[0]是test函数的实参(实际参数)

    printf("函数调用后的a[0]：%d", a[0]);
    return 0;
}