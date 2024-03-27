#include <stdio.h>
#include <string.h>

int main() {
    char str1 ='a';
    char str2[] = "a";
    char name[43];
    printf("char str1 = %c, len = %lu\n", str1, sizeof(str1));
    printf("char[] str2 = %s, len = %lu\n", str2, sizeof(str2));
    printf("char[] str2 = %s, len = %lu\n", str2, strlen(str2));

    printf("Enter your name: ");
    scanf("%s", name); // hello world

    // Your name is hello, strlen = 5 , sizeof = 40 
    printf("Your name is %s, strlen = %lu , sizeof = %lu \n", name, strlen(name), sizeof(name));
    return 0;
}
