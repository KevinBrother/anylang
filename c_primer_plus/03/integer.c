#include "stdio.h"

int main() {
    // 默认是signed int
    short int a = -1;
    int b = -2;
    long int c = -3;
    float d = -4.0;
    double e = -5.0;
    long double f = -6.0;
    long long int j = -7;

    unsigned short int g = 8;
    unsigned int h = 9;
    unsigned long int i = 10;
    unsigned long long int k = 11;


    printf("Size of short int a is %d , sizeof(a) is %lu bytes\n", a, sizeof(a));
    printf("Size of int b is %d , sizeof(b) is %lu bytes\n", b, sizeof(b));
    printf("Size of long int c is %ld , sizeof(c) is %lu bytes\n", c, sizeof(c));
    printf("Size of float d is %f , sizeof(d) is %lu bytes\n", d, sizeof(d));
    printf("Size of double e is %lf , sizeof(e) is %lu bytes\n", e, sizeof(e));
    printf("Size of long double f is %Lf , sizeof(f) is %lu bytes\n", f, sizeof(f));
    printf("Size of long long int j is %lld , sizeof(j) is %lu bytes\n", j, sizeof(j));
    printf("Size of unsigned short int g is %u , sizeof(g) is %lu bytes\n", g, sizeof(g));
    printf("Size of unsigned int h is %u , sizeof(h) is %lu bytes\n", h, sizeof(h));
    printf("Size of unsigned long int i is %lu , sizeof(i) is %lu bytes\n", i, sizeof(i));
    printf("Size of unsigned long long int k is %llu , sizeof(k) is %lu bytes\n", k, sizeof(k));

    return 0;
}


        