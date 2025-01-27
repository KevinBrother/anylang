#include "stdio.h"

void water2num();

int main() {
    int age;
    float base = 3.25e7;
    float seconds = 0;
    printf("Enter your age in years: ");
    scanf("%d", &age);

    seconds = base * age;
    
    printf("You are %d years old, which is equivalent to %e seconds.\n", age, seconds);

    water2num();
    return 0;

}

void water2num() {
    printf("Enter water weight Quarts: ");
    float weight;
    scanf("%f", &weight);
    float base = 3.0e-23;


    float num = weight / base;

    printf("You have %.f Quarts of water. 共有水分子数量 %e .\n", weight, num);
}
