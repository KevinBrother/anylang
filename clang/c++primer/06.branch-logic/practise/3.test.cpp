#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{
  char ch;
  int ct1, ct2;
  ct1 = ct2 = 0;
  while ((ch = cin.get()) != '$')
  {
    cout << ch;
    ct1++;

    if (ch == '$')
      ct2++;

    cout << ch;
  }

  cout << "ct1 =  " << ct1 << " ct2 = " << ct2;

  return 0;
}
