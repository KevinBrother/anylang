#include <stdio.h>
#include "hotel.h"

int menu(void) {
    int code, status;
    printf("\n %s%s\n", STARS, STARS);
    printf("Enter the number of the desired hotel: \n");
    printf("1) Fairefield Arms      2) Hotel Olympic\n");
    printf("3) Hilton Garden Inn    4) Holiday Inn Express\n");
    printf("5) quit\n");

    while((status = scanf("%d", &code)) != 1 || (code < 1 || code > 5)) {
        if(status != 1) {
            scanf("%*s"); // clear the input buffer 处理非整数输入
            printf("Enter an integer from 1 to 5, please.\n ");
        }

    }
    return code;
}

int getnights(void) {
    int nights;
    printf("How many nights do you want to stay? ");
    while(scanf("%d", &nights)!= 1) {
        scanf("%*s"); // clear the input buffer 处理非整数输入
        printf("Enter an integer, such as 2\n");

    }
    return nights;
}

void showprice(double rate, int nights) {
    int n;
    double total = 0.0;
    double factor = 1.0;


    for(n = 1; n <= nights; n++, factor *= DISCOUNT) {
        total += rate * factor;
        printf("The total price is $%.2f\n", total);    
        // factor *= 0.8;
    }
}