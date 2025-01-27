#include <iostream>
#include <fstream>
#include <cstdlib>

using namespace std;
int main(int argc, char const *argv[])
{
  char automobile[50];

  const int SIZE = 60;

  char filename[SIZE];

  ifstream inFile;

  cout << "输入文件名称：";
  cin.getline(filename, SIZE);
  inFile.open(filename);
  if (!inFile.is_open())
  {
    cout << "不能打开文件：" << filename << endl;
    cout << "程序终止中";
    exit(EXIT_FAILURE);
  }

  double value;
  double sum = 0.0;
  int count = 0;

  // inFile >> value;

  while (inFile.good())
  {
    ++count;
    inFile >> value;
    sum += value;
    cout << "当前值为：" << value;
  }

  if (inFile.eof())
    cout << "传递结束\n";
  else if (inFile.fail())
    cout << "传递因为错误，而中断\n";
  else
    cout << "传递出现位置错误\n";

  if (count == 0)
    cout << "没有数据传递";
  else
  {
    cout << "总共读读数据个数为：" << count << endl;
    cout << "和为：" << sum << endl;
    cout << "平均值为：" << sum / count << endl;
  }

  inFile.close();

  return 0;
}
