#include <stdio.h>

int main() {
    const char *msg = "Hello, world!";

    const char *copy;

    copy = msg;

    printf("%s\n", copy);
    printf("msg = %s; &msg = %p; value = %p; *msg = %c\n", msg, &msg, msg, *msg);
    printf("copy = %s; &copy = %p; value = %p\n", copy, &copy, copy);

    return 0;
}