#include "stdio.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define USAGE_RETURN \
    do{ \
        printf("usage: ./float_show f|d 123.456\n"); \
        return 0; \
    }while(0)




int main(int argc, char **argv) {
    float f;
    double d;
    char *p;
    int nbyte;

    if(argc != 3)
        USAGE_RETURN;

    printf("input: %s %s\n", argv[1], argv[2]);
    if(strcmp(argv[1],"f") == 0) {
        f = strtof(argv[2], NULL);
        printf("float: %.50f\n", f);
        p = (char *)&f;
        nbyte = sizeof(float);
    }
    else if(strcmp(argv[1],"d") == 0) {
        d = strtod(argv[2], NULL);
        printf("double: %.50f\n", d);
        p = (char *)&d;
        nbyte = sizeof(double);
    }
    else
        USAGE_RETURN;

    char cc[nbyte*8];  // VLA
    int k = 0;
    for(int i=nbyte-1; i>=0; --i){  // little endian
        char data = p[i];
        unsigned char pbit = 0x80;
        for(int j=0; j<8; ++j){
            if(data & pbit)
                cc[k++] = '1';
            else
                cc[k++] = '0';
            pbit >>= 1;  // logical right shift for unsigned
        }
    }

    printf("S  E  M:\n");
    if(strcmp(argv[1],"f") == 0)
        for(int i=0; i<nbyte*8; ++i) {
            if ((i==1) || (i==9)) printf("  ");
            printf("%c", cc[i]);
        }
    else if(strcmp(argv[1],"d") == 0)
        for(int i=0; i<nbyte*8; ++i) {
            if ((i==1) || (i==12)) printf("  ");
            printf("%c", cc[i]);
        }
    printf("\n");

    return 0;
}


int main2() {
    double fa = 0.1;
    double da = 0.2;

    printf("fa: %lf , da: %lf \n", fa, da);
    printf("sizeof(fa): %lu , sizeof(da): %lu \n",  sizeof(fa), sizeof(da));
    printf("0.1 + 0.2 = %f \n", fa + da);
    return 0;
}
