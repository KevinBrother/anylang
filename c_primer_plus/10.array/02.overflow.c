#include <stdio.h>

#define SIZE 5

int main() {
    int oxen[SIZE] = {1, 2, 3, 4};
    int arr[SIZE];
    // arr = oxen; // This line will cause a memory leak.
    arr[SIZE] = oxen[SIZE]; // This line will cause an overflow error.

    printf("The value of oxen[SIZE] is %d\n", oxen[SIZE - 1]);
    printf("The value of arr[SIZE] is %d\n", arr[SIZE - 1]);
    return 0;
}