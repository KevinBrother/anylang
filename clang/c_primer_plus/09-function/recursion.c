#include "stdio.h"

void up_to_down(int n) {
    if (n == 0) {
        return;
    }
    printf("level %d 的递， location %p\n", n, &n);
    up_to_down(n - 1);
    printf("level %d 的归， location %p\n", n, &n);
}

int main() {
    up_to_down(5);
    return 0;
}