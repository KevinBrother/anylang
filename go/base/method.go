package main

import "fmt"

type Person struct {
	name string
	age  int
}

func (p Person) Dream() {
	fmt.Println(p.name, "Dreaming")
}

// 值接收者方法（不会修改原始对象）,
// 方法内部修改仅对副本生效。(并发安全)
// 可以通过返回新对象的方式实现链式调用
func (p Person) SetAge(age int) {
	p.age = age

	// return p
}

// 指针接收者方法（可以修改原始对象）, 方法修改原对象的状态
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
