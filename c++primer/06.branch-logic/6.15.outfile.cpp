#include <iostream>
#include <fstream>

using namespace std;
int main(int argc, char const *argv[])
{
  char automobile[50];
  int year;
  double a_price;
  double b_price;

  ofstream outfile;
  outfile.open("carInfo.txt");

  cout << "请输出automobile的型号：";
  cin.getline(automobile, 50);

  cout << "请输入年份： ";
  cin >> year;
  cout << "请输原始价格 ";
  cin >> a_price;
  b_price = 0.913 * a_price;

  // 把数据展现在屏幕上

  cout << fixed;
  cout.precision(2);
  cout.setf(ios_base::showpoint);
  cout << "手机的型号为：" << automobile << endl;
  cout << "Year：" << year << endl;
  cout << "原来的价格为：" << a_price << endl;
  cout << "现在的价格为：" << b_price << endl;

  // 使用outfile替代cout

  outfile << fixed;
  outfile.precision(2);
  outfile.setf(ios_base::showpoint);
  outfile << "手机的型号为：" << automobile << endl;
  outfile << "Year：" << year << endl;
  outfile << "原来的价格为：" << a_price << endl;
  outfile << "现在的价格为：" << b_price << endl;
  outfile.close();

  return 0;
}
