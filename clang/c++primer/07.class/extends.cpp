#include <iostream>

class A {
public:
    int add(int a, int b) {
        return a + b;
    }
};

class B {
public:
    int add(int a, int b) {
        return a - b;
    }
};

class C : public A, public B {
public:
    // 重定义 add 函数来解决二义性问题
    int add(int a, int b) {
        // 进行自定义的加法操作
        return a * b;
    }
};

int main() {
    C c;

    int result = c.add(2, 3);

    // 可以使用作用域解析运算符指明调用的具体函数
    int resultA = c.A::add(2, 3);  // 调用 A 类的 add 函数
    int resultB = c.B::add(2, 3);  // 调用 B 类的 add 函数

    // 输出结果
    std::cout << "Result: " << result << std::endl;
    std::cout << "Result A: " << resultA << std::endl;
    std::cout << "Result B: " << resultB << std::endl;

    return 0;
}