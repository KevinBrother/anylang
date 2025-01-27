#include <stdio.h>

// int sum(int *, int size);
// int sum(int *arr, int size);
int sum(int arr[], int size);

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);

    printf("arr total byte length (each int is 4 bytes) : %d\n", sizeof(arr));

    printf("main arr location is %p\n", arr);
    int sum_value = sum(arr, size);

    return 0;
}

// int sum(int *arr, int size) {
int sum(int arr[], int size) {
    int rst = 0;

    printf("sum arr location is %p\n", arr);
    printf("the size of arr is %zd bytes. (获取的不是数组本身，而是数组的指针存储的地址) \n", sizeof(arr));
    for (int i = 0; i < size; i++) {
        rst += arr[i];
    }

    printf("Sum of array  [1,2,3,4,5], elements is: %d\n", rst);
    return rst;
}
