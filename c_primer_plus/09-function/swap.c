#include <stdio.h>

void swap(int *a, int *b);

int main() {
    int a = 10, b = 20;

    printf("Before swap: a = %d, b = %d\n", a, b);

    swap(&a, &b);

    printf("After swap: a = %d, b = %d\n", a, b);

    return 0;
}


void swap(int *a, int *b) {
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}