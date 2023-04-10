#include <iostream>
#include <array>

using namespace std;

int main(int argc, char const *argv[])
{

  array<int, 5> arr = {1, 2, 3, 4, 5};
  // array<int, 5> *pa = &arr; // pa指向arr
  array<int, 5> *pa; // pa指向arr
  // pa = nullptr;             // 将pa赋值为nullptr

  int arr2[] = {1, 2, 3, 4, 5};
  int *p = arr2; // 等价于 int *p = &arr[0];

  cout << "after &arr[0]: " << &arr[0] << endl;
  cout << "after &arr[1]: " << &arr[1] << endl;
  cout << "after &arr: " << &arr << endl;
  cout << "after sizeof(arr): " << sizeof(arr) << endl;
  cout << "计算数组长度 sizeof(arr) / sizeof(arr[0]): " << sizeof(arr) / sizeof(arr[0]) << endl;
  cout << "after sizeof(arr2): " << sizeof(arr2) << endl;
  cout << "after pa: " << pa << endl;

  return 0;
}
