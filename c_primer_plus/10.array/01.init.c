#include <stdio.h>

int main() {
    int arr[5];
    int arr2[5] = {1, 2, 3, 4, 5};
    int arr3[5] = {1, 2, 3}; // missing values are initialized to 0
    int arr4[] = {1, 2, 3, 4, 5}; // missing size is inferred from initializer
    int arr5[5] = {1, [2] = 2, 3, 4}; // too few values in initializer (c99 新出的初始化器)

    arr[1] = 2;

}        