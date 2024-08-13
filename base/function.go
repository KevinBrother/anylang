package main

import "fmt"

func add(base int) func(int) int {
	return func(i int) int {
		base += i
		return base
	}
}

func main() {
	adder := add(10) // 创建一个闭包，初始值为 10

	fmt.Println(adder(5)) // 输出：15 (10 + 5)
	fmt.Println(adder(3)) // 输出：18 (15 + 3)
	fmt.Println(adder(7)) // 输出：25 (18 + 7)
}
