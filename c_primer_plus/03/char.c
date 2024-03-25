#include "stdio.h"
#include "stdbool.h"

int main() {
    char c = '\a';
    printf("Enter a character: ");
    scanf("%c", &c);
    printf("You entered: %c\n ASCII value: %d\n", c, c);


    _Bool b = true;
    printf("b = %d\n", b);
    return 0;
}
