#include <iostream>
using namespace std;
int main()
{
  cout << "please enter a Celsius value: ";
  double Celsius;
  cin >> Celsius;

  double Fahrenheit = 1.8 * Celsius + 32.0;

  cout << Celsius << " degrees Celsius is " << Fahrenheit << "degrees Fahrenheit";

  return 0;
}