
#include <stdio.h>

int main(int argc, char const *argv[])
{
    char a[3] = {'m', 'j', '\0'}; // 添加了结束符\0
    char b[] = {'i', 's'}; // 假设忘记添加结束符\0
    printf("字符串a：%s", a); // 输出字符串a
    printf("\n"); // 换行
    printf("字符串b：%s", b); // 输出字符串b

    
    puts("lmj");

    return 0;
}
