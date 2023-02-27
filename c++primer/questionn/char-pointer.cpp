#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{

  char *a;
  char b = 'a';
  a = &b;
  cout << "after a: " << a << endl;
  cout << "after *a: " << *a << endl;
  cout << "after (char *)a: " << (char *)a << endl;

  return 0;
}
