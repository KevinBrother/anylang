#include <limits.h>
#include <stdio.h>
#include <float.h>

int main() {
  printf("===== 整数类型 ======\n");
  printf("char 最小值：%d\n", CHAR_MIN);
  printf("char 最大值：%d\n", CHAR_MAX);
  printf("unsigned char 最大值：%u\n", UCHAR_MAX);
  printf("short 最小值：%d\n", SHRT_MIN);
  printf("short 最大值：%d\n", SHRT_MAX);
  printf("unsigned short 最大值：%u\n", USHRT_MAX);
  printf("int 最小值：%d\n", INT_MIN);
  printf("int 最大值：%d\n", INT_MAX);
  printf("unsigned int 最大值：%u\n", UINT_MAX);
  printf("long 最小值：%ld\n", LONG_MIN);
  printf("long 最大值：%ld\n", LONG_MAX);
  printf("unsigned long 最大值：%lu\n", ULONG_MAX);
  printf("long long 最小值：%lld\n", LLONG_MIN);
  printf("long long 最大值：%lld\n", LLONG_MAX);
  printf("unsigned long long 最大值：%llu\n", ULLONG_MAX);

  printf("===== 浮点数类型 ======\n");

  printf("float 最小正值：%E\n", FLT_MIN);
  printf("float 最大值：%E\n", FLT_MAX);
  printf("double 最小正值：%E\n", DBL_MIN);
  printf("double 最大值：%E\n", DBL_MAX);
  printf("long double 最小正值：%LE\n", LDBL_MIN);
  printf("long double 最大值：%LE\n", LDBL_MAX);
  return 0;
}