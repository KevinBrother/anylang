#include "stdio.h"

int main() {
    int num;

    char a = 'a';
    printf("Enter a number: ");
    printf("the character a ASCII value is %d\n", a);
    scanf("%d", &num);

    printf("The character equivalent of %d is %c\n", num, num);

    return 0;
}