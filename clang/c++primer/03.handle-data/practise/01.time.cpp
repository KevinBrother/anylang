#include <iostream>

using namespace std;
struct Time
{
  int days;
  int hours;
  int minutes;
  int seconds;
};

Time convertTime(long);

int main(int argc, char const *argv[])
{
  cout << argc << endl;

  long seconds;

  cout << "输入总共的秒数：";
  cin >> seconds;
  cout << endl;
  Time time = convertTime(seconds);

  cout << "days=" << time.days << " hours=" << time.hours << " minutes=" << time.minutes << " seconds=" << time.seconds << endl;
  return 0;
}

Time convertTime(long _seconds)
{
  const int oneDay = 3600 * 24;
  const int oneHour = 3600;
  const int oneMinute = 60;

  int days = _seconds / oneDay;
  int hours = _seconds % oneDay / oneHour;
  int minutes = _seconds % oneHour / oneMinute;
  int seconds = _seconds % oneMinute;

  Time time = {
      days,
      hours,
      minutes,
      seconds};

  return time;
}