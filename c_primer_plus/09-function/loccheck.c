#include <stdio.h>

void mikado(int);

int main() {
    int pooh = 2, bah = 5; /* main 函数中的局部变量 */

    printf("in main(), pooh = %d and &pooh = %p\n", pooh, &pooh);
    printf("in main(), bah = %d and &bah = %p\n", bah, &bah);

    mikado(pooh);
    // poohLocal(pooh);
    
    return 0;
}

void mikado(int bah) {
    int pooh = 10; /* mikado 函数中的局部变量 */


    printf("in mikado(), pooh = %d and &pooh = %p\n", pooh, &pooh);
    printf("in mikado(), bah = %d and &bah = %p\n", bah, &bah);
}
