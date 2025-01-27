#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{

  char *a;
  char b = 'x';
  a = &b;
  cout << "after a: " << a << endl;
  cout << "after *a: " << *a << endl;
  cout << "after &a: " << &a << endl;
  std::cout << "The address of a is: " << static_cast<void *>(a) << std::endl;
  cout << "after b: " << b << endl;
  cout << "after &b: " << &b << endl;
  std::cout << "The address of b is: " << static_cast<void *>(&b) << std::endl;
  cout << "after (char *)a: " << (char *)a << endl;

  return 0;
}
