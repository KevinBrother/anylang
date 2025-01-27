#include<stdio.h>
int funb();

int main() {
    funb(); //1
    extern int numb;
    printf("%d",numb); //2
    return 0;
}