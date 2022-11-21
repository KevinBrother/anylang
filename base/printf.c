#include<stdio.h>

int plus_one(int n) {
    return n + 1;
};

int main(void){
    // 1. printf
    printf("hello world \a \r\tdsaa \r");

    // &运算符用来取出一个变量所在的内存地址。
    int x = 5;
    printf("x's address is %p\n", &x);

    // 2. 
     printf("指针5的地址的值为 %d \n",*(&x));
    /*  
    if (x == *(&x)) {
        printf('right \n');
    } */

    // 3. 函数调用
    
    int funRst = plus_one(12);
    printf("plus_one的值 %d \n", funRst);


    // 4. 数组
    // TODO 这个值为啥是12??
    int arr[] = {22, 37, 11};
    int arrLen = sizeof(arr); // 12

    printf("arrlen的sizeof %d \n",arrLen);

    // 
    return 0;
}
