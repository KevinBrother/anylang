#include <iostream>

using namespace std;
int main(int argc, char const *argv[])
{

  // char get[10];
  cin.get();

  cout << "get: " << cin.get() << endl;

  char getline[10];
  cin.getline(getline, 10);

  cout << "getline: " << getline << endl;

  return 0;
}
