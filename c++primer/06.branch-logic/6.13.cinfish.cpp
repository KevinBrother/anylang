// 记录用户输入的5次鱼的重量，并返回平均值

#include <iostream>
using namespace std;
const int MAX = 5;

int main()
{
  int fishes[MAX];

  cout << "请输入每次鱼的数量，回车开始下一次的输入" << endl;
  int i = 0;

  while (++i <= MAX)
  {
    while (!(cin >> fishes[i]))
    {
      cin.clear();
      while (cin.get() != '\n')
      {
        continue;
      };
      cout << "请输入一个数字： ";
    }

    cout << "第" << i << "次打鱼的重量结果为：" << fishes[i] << endl;
  }

  int total = 0;
  for (int cur : fishes)
  {
    total += cur;
  }

  cout << "总共的鱼是：" << total << endl;
  cout << "平均值为：" << total / MAX << endl;

  return 0;
}
