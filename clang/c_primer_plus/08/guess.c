#include "stdio.h"

int main() {
    int guess = 1;

    printf("请输入 1 到 100 到值，我来猜！ \n");

    printf("如果我猜对了，你说 y \n");

    printf("如果我猜错了，你说 n \n");

    printf("emm... 你的答案是：%d \n", guess);
    char c;
    while ((c = getchar()) != 'y') {
        printf("emm... 我猜你的答案是：%d \n", ++guess);

        printf("这是c：%c \n", c);

        while (getchar() != 'n') {
            continue;
        }
    }

    printf("我就知道，我能猜对！ \n");
    return 0;
}