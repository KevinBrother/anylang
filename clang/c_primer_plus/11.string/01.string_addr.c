#include <stdio.h>
#define MSG "IM special"
int main() {
    const char arr[] = MSG;
    const char *pt = MSG;

    printf("address of \"IM special\": %p\n", "IM special");
    printf("               address arr: %p\n", arr);
    printf("                address pt: %p\n", pt);
    printf("               address MSG: %p\n", MSG);
    printf("address of arr[0]:         %p\n", &arr[0]);
    printf("address of \"IM special\": %p\n", "IM special");

    return 0;
}