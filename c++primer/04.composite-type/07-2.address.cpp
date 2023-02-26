#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{
  int *pt;
  pt = (int *)0x1060fb518;

  // express values two ways
  cout << "values: update= " << pt << endl;

  return 0;
}
