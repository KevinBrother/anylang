package main

import "fmt"

type Person struct {
	name string
	age  int
}

func (p Person) Dream() {
	fmt.Println(p.name, "Dreaming")
}

func (p Person) SetAge(age int) {
	p.age = age
}

func (p *Person) SetAge2(age int) {
	p.age = age
}

func main() {
	// 调用 Dream 方法
	p := Person{"Alice", 25}
	p.Dream()

	// 调用 SetAge 方法
	p.SetAge(30)
	fmt.Println(p.age) // 输出：25 (未修改)

	// 调用 SetAge2 方法
	p.SetAge2(35)
	fmt.Println(p.age) // 输出：35 (修改成功)
}
