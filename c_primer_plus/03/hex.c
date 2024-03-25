#include "stdio.h"

int main() {
  int a = 20;
  int b = 020; // 0 开头的数字表示八进制
  int c = 0x20; // 0x 开头的数字表示十六进制

  printf("a: %d, a: %d, a: %d\n", a,b,c);
  printf("a(10): %d, a(8): %o, a(16): %x\n", a,b,c);
  
  return 0;
}