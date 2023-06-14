#include <iostream>
#include <cmath>

int main()
{
  using namespace std;

  double area;

  cout << "Enter the floor area, in square feet, of you home: ";
  cin >> area;
  double side;
  side = sqrt(area);
  cout << "thats of a square " << side
       << " feet to the side" << endl;
  cout << "How fascination" << endl;

  return 0;
}
