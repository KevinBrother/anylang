#include <iostream>
// 如果实现写在main的后面，就需要在main的前面提供原型（类型定义）
void simon(int);

int main()
{
  using namespace std;
  simon(5);
  cout << "Pick an integer: ";
  int count = 0;
  cin >> count;
  simon(count);
  cout << "Done !" << endl;
  return 0;
}

void simon(int n)
{
  using namespace std;
  cout << "Simon says touch your toes " << n << " times." << endl;
}