#include <stdio.h>
#define SEVEN 12

int main() {
    double x = 10.5;

    // const 数组、const 指针、指向const 的指针
    double rates[5] = {0.05, 0.06, 0.07, 0.08, 0.09};
    const double days[SEVEN] = {30,23,23,12,23,12,65};
    const double locked[4] = {1000, 2000, 3000, 4000};

    // 编译错误，指向 const 的指针，不能用于改变值。
    // days[0] = 1;

    const double *pd = rates;

    // *pd = 0.06; // 编译错误，不能改变指向 const 的指针的值。
    // pd[2] = 22.22;
    rates[0] = 99.99;

    const double *pc = rates;
    pc = days;
    pc = locked;
    pc = &rates[3];
    pc = &x;


    double *pcn = rates;
    // 编译错误，不能将 const 指针赋值给普通指针。
    // pcn = locked; 
    // pcn = &locked[1]; // 编译错误

    pcn = &rates[1];
    return 0;
}