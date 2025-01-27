#include "stdio.h"

int double_to_int();
int main() {
    double a = 3.0;
    double b = 5.0;

    printf("double a = %lf\n", a);
    printf("double b = %lf\n", b);
    printf("int format a = %d\n", a);
    printf("int format b = %d\n", b);
    printf("int a = %d\n", (int)a);
    printf("int b = %d\n", (int)b);

    printf("double_to_int a = %d\n", double_to_int(a) + 1);
}

int double_to_int(double x) {
    return x;
}
