#include <iostream>
using namespace std;

void floatResult();
void coutPut();

int main()
{
  coutPut();
  floatResult();
  return 0;
}

void coutPut()
{
  char chb = 'M';
  cout << chb << endl;
  cout << "$" << endl;
  cout.put('$');
  cout << endl;
}

void floatResult()
{
  float a = 2.34E+22f;
  float b = a + 1.0f;

  cout << "a = " << a << endl;
  cout << " b = " << b << endl;
  cout << " b -a = " << b - a << endl;
}