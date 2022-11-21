#include <stdio.h>
#include <math.h>
int main() {
    double a, b, c, perimeter, area;
    scanf("%lf %lf", &a, &b);

    c = sqrt(a * a + b * b);
    perimeter = a + b + c;
    area = a * b / 2;

    printf("%.2lf\n", perimeter);
    printf("%.2lf", area);


    return 0;
}