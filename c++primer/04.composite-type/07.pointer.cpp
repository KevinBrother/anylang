#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{
  /* code */
  int update = 6;
  // int *p_update = &update;
  int *p_update;
  p_update = &update;

  int donuts = 6;
  double cpus = 4.5;

  // express values two ways
  cout << "values: update= " << update << endl;
  cout << "value *p_update = " << *p_update << endl;

  // express address two ways
  cout << "address: update= " << &update << endl;
  cout << "address: *p_update = " << p_update << endl;

  // use pointer to change values
  *p_update = *p_update + 1;
  cout << "Now update = " << update << endl;
  // value and address
  cout << "donuts value " << donuts << "address = " << &donuts << endl;
  cout << "cpus value " << cpus << "address = " << &cpus << endl;

  return 0;
}
