#include <iostream>

using namespace std;
enum colors
{
  red,
  origin,
  blue,
  green,
  yellow
} band;

enum status
{
  start,
  first = 0,
  second = 1,
  other,
  last = 2,
};

enum status2
{
  start = 1L,
  first = 2L,
  second = 2L,
  other = 2L,
  last = 2L
};

// 为什么会报错？
// band = red;

int main(int argc, char const *argv[])
{
  band = red;
  int number = yellow + 1;
  // colors other = 1; // 这个不行，需要👇的强制类型转换
  colors other = colors(1);

  cout << "band = " << band << endl;
  cout << "green = " << green << endl;
  cout << "number = " << number << endl;
  cout << "other = " << other << endl;
  return 0;
}
