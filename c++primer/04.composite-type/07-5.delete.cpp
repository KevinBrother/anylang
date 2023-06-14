#include <iostream>
#include <cstring>
using namespace std;

char *getname(void);

int main(int argc, char const *argv[])
{
  char *name;
  cout << "main name: " << name << endl;
  cout << "main *name: " << *name << endl;
  cout << "main (int *)name: " << (int *)name << endl;

  char update = 'a';
  name = &update;
  cout << "after name: " << name << endl;
  cout << "after *name: " << *name << endl;
  cout << "after (int *)name: " << (int *)name << endl;

  name = getname();

  cout << name << " at " << name << endl;
  delete[] name;

  return 0;
}

char *getname()
{
  char temp[80];
  cout << "Enter last name: ";
  cin >> temp;
  char *pn = new char[strlen(temp) + 1];
  // strcpy(pn, temp);
  cout << "getname pn: " << pn << endl;
  cout << "getname *pn: " << *pn << endl;
  cout << "getname (int *)pn: " << (int *)pn << endl;
  return pn;
}
