#include "stdio.h"


int main() {
    int a = 2147483647;
    int b = 2147483647;
    int c = a + b;

    float d = 3.402823466e+38;
    float e = 3.402823466e+38;
    float f = d + e;

    float g = 1.175494351e-38;
    float h = 1.175494351e-38;
    float i = g + h;

    printf("%d\n", c);
    printf("%f\n", f);
    printf("%f\n", i);

    return 0;
}