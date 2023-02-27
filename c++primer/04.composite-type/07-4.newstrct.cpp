#include <iostream>
using namespace std;

struct inflatable
{
  char name[20];
  float volume;
  double price;
};

int main(int argc, char const *argv[])
{
  inflatable *ps = new inflatable;

  cout << "enter name of innflatabble item: ";
  cin.get(ps->name, 20);
  cout << "enter volume of innflatabble item: ";
  cin >> (*ps).volume;
  cout << "enter price $: ";
  cin >> ps->price;

  cout << "name: " << (*ps).name << endl;
  cout << "volume: " << ps->volume << endl;
  cout << "price: $" << (*ps).price << endl;
  delete ps;
  return 0;
}
