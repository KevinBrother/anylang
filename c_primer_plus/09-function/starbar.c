#include "stdio.h"

#define NAME "zhouxinbxin"
#define STARS '*'
#define SCORE "世界第一武道大会第一名"
#define WIDTH 40

// void starBar(int width);
void starBar(int); // 函数原型
int main() {

    starBar(WIDTH); // 使用函数

    printf("%s\n", NAME);
    printf("%s\n", SCORE);

    starBar(WIDTH);

    return 0;
};

void starBar(int width) { // 定义函数
    int count;
    for( count = 1; count <= width; count++) {
        putchar(STARS);
    }
    putchar('\n');
}