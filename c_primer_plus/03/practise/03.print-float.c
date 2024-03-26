#include <stdio.h>

int main() {
    float number;

    printf("请输入一个浮点数：");
    scanf("%f", &number);

    printf("小数点形式: %f\n", number);
    printf("指数形式: %e\n", number);

    // 判断系统是否支持十六进制记数法
    if (sizeof(float) == sizeof(unsigned int)) {
        unsigned int* ptr = (unsigned int*)&number;
        unsigned int value = *ptr;

        printf("p记数法: 0x%08X\n", value);
    }

    return 0;
}