#include <iostream>

int main(int argc, char const *argv[])
{
  using namespace std;

  int arr[] = {1, 2, 4, 8, 16, 32, 64};

  for (int a : arr)
  {
    cout << a * 2 << endl;
  }

  return 0;
}
