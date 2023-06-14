#include <iostream>
#include <climits>

int main()
{
  using namespace std;
  int n_int = INT_MAX;
  int un_int = UINT_MAX;
  short n_short = SHRT_MAX;
  long n_long = LONG_MAX;
  long long n_llong = LLONG_MAX;
  // sizeof operator yields size of type or of variable
  cout << "int is  " << sizeof(int) << " bytes" << endl;
  cout << "un_int is  " << sizeof(un_int) << " bytes" << endl;
  cout << "short is " << sizeof(n_short) << " bytes, " << endl;
  cout << "n_long is " << sizeof(n_long) << " bytes." << endl;
  cout << "n_llong  is " << sizeof(n_llong) << " bytes," << endl;
  cout << endl;

  cout << "Maximum values:" << endl;
  cout << "int: " << n_int << endl;
  cout << "un_int: " << un_int << endl;
  cout << "short: " << n_short << endl;
  cout << "long: " << n_long << endl;
  cout << "long long : " << n_llong << endl;

  cout << endl;

  cout << "Minimum int value = " << INT_MIN << endl;
  cout << "bits per byte = " << CHAR_BIT << endl;

  // 2的32次方 0 ～ 4294967295
  unsigned int max_uint = 4294967295;
  // -2147483647 ~ 2147483647
  int max_int = 2147483647;

  long also = 560334;

  cout << "max_uint: " << max_uint << endl;
  cout << "max_int: " << max_int << endl;
  cout << "also: " << also << endl;
  return 0;
}