#include <iostream>

struct user
{
  char name[20];
  int age;
} ming;

struct user2
{
  char name[20];
  int age;
} hong = {
    "小红",
    16};

user lang = {
    "小兰",
    20};

user who;

int main(int argc, char const *argv[])
{

  using namespace std;

  cout << ming.name << endl;
  cout << hong.name << endl;
  cout << lang.name << endl;
  cout << "who: " << who.name << " " << who.age << endl;
  /*
  who.name = "who!!"; // 不可以这样初始化
  cout << "who: " << who.name << " " << who.age << endl;
  */
  return 0;
}
