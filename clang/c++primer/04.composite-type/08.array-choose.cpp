#include <iostream>
#include <vector>
#include <array>
using namespace std;

int main(int argc, char const *argv[])
{

  // C, original C++
  double sa[4] = {1.1, 2.2, 3.3, 4.4};
  double s1[4];
  // C++98 STL
  vector<double> va(4);
  vector<double> va2(4);
  // 在c++98里，没有简单的方法初始化vector
  va[0] = 1.0 / 3.0;
  va[1] = 1.0 / 5.0;
  va[2] = 1.0 / 7.0;
  va[3] = 1.0 / 9.0;

  va2 = va;

  // C++11 --创建和初始化array object
  array<double, 4> aa = {3.3, 4.4, 5.5, 6.6};
  array<double, 4> aa2;

  aa2 = aa; // 把aa地址赋值给aa2

  // use array notation
  cout << "sa[2]: " << sa[2] << " at " << &sa[2] << "\n";
  cout << "va[2]: " << va[2] << " at " << &va[2] << "\n";
  cout << "va2[2]: " << va2[2] << " at " << &va2[2] << "\n";
  cout << "aa[2]: " << aa[2] << " at " << &aa[2] << "\n";
  cout << "aa2[2]: " << aa2[2] << " at " << &aa2[2] << "\n";

  // misdeed
  sa[-2] = 20.2;
  cout << "sa[-2]: " << sa[-2] << " at " << &sa[-2] << "\n";
  cout << "aa[2]: " << aa[2] << " at " << &aa[2] << "\n";
  cout << "aa2[2]: " << aa2[2] << " at " << &aa2[2] << "\n";
  return 0;
}
