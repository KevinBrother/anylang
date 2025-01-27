#include <iostream>
#include <cctype>

using namespace std;
int main(int argc, char const *argv[])
{

  cout << "输入一串文本计算各个类型的字符数量，以@结束输入\n";

  char ch;
  int whitespace = 0;
  int digits = 0;
  int chars = 0;
  int punct = 0;
  int other = 0;

  ch = cin.get();
  while (ch != '@')
  {
    if (isalpha(ch))
      chars++;
    else if (isspace(ch))
      whitespace++;
    else if (isdigit(ch))
      digits++;
    else if (ispunct(ch))
      punct++;
    else
      other++;

    ch = cin.get();
  }

  cout << "whitespace 的个数为：" << whitespace << endl;
  cout << "digits 的个数为：" << digits << endl;
  cout << "chars 的个数为：" << chars << endl;
  cout << "punct 的个数为：" << punct << endl;
  cout << "other 的个数为：" << other << endl;

  return 0;
}
