#include <stdio.h>
#include <string.h>

int main()
{
    // string 的增删改查操作

    // 1. 字符串的长度
    char str[] = "hello world";
    char *p = str;
    // 1. 字符串的长度
    int len = 0;
    while (*p != '\0')
    {
        len++;
        p++;
    }

    printf("字符串的长度是：%d\n", len);

    // 2. 字符串的拼接
    char str1[] = "hello";
    char str2[] = "world";
    char str3[100];

    char *p1 = str1, *p2 = str2;

    int i = 0;
    while (*p1 != '\0')
    {
        str3[i] = *p1;
        p1++;
        i++;
    }

    str3[i++] = ' ';

    while (*p2 != '\0')
    {
        str3[i] = *p2;
        p2++;
        i++;
    }

    printf("str3: %s, strlen: %d, sizeof: %d \n", str3, strlen(str3), sizeof(str3));

    printf("strcmp: %d\n", strcmp(str, str3));

    char *p3 = strchr(str, 'l');
    printf("strchr(str, 'l') *p3: %p, *p3 char: %c,  str: %s \n", p3, *p3, p3);

    char *p4 = strstr(str, "lo");
    printf("strstr(str, \"lo\") *p4: %p,  str: %s \n", p4, p4);

    return 0;
}