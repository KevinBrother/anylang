#include <stdio.h>

void name(char name[]);

int main(void) {
    name("jon");
    name("jon");
    name("jon");
    name("bob");
}

void name(char name[]) {
    printf("this is %s .\n",name);
}