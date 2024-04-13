#include "stdio.h"

int max();

double d_max(double a, double b);

int main() {

    printf("The maximum of %d and %d is %d\n", 3, 5, max(3.0, 5.0));
    printf("The maximum of %d and %d is %d\n", 3, 5, max(3, 5));

    return 0;
}

int max(int a, int b) {
    return (a > b)? a : b;
}

