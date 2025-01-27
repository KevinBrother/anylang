#include <iostream>

int main()
{
  using namespace std;

  int carrots;

  cout << "How many dd did you have? " << endl;
  cin >> carrots;
  cout << "Have two more.";
  carrots = carrots + 2;
  // the next concatenates output
  cout << "Now you have " << carrots << " carrots" << endl;
  return 0;
}