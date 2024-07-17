#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello World";
    char ch = 'l';

    // 查找字符 'l' 在字符串 "Hello World" 中第一次出现的位置
    char *ptr = strchr(str, ch);

    if (ptr) {
        printf("字符 '%c' 在字符串中第一次出现的位置: %s\n", ch, ptr);
    } else {
        printf("字符 '%c' 未在字符串中找到\n", ch);
    }

    return 0;
}