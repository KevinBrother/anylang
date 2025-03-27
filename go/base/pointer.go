package main

import "fmt"

type myStruct struct {
	name string
}

type Person struct {
	name string
	age  int
	// children []Children //（值类型切片）每次添加或修改时，都会复制整个结构体， 修改切片中的 Children 不会影响原始的 Children 变量。
	children []*Children // （指针切片）切片中存储的是指向 Children 结构体的指针，修改切片中元素的字段会直接影响原始的 Children 实例。
}

type Children struct {
	cname string
	cage  int
}

func swap(a, b myStruct) {
	tmp := a
	a = b
	b = tmp
	fmt.Printf("p1 = %v, p2 = %v\n", a, b)
}

func swap2(a, b *myStruct) {
	fmt.Printf("a = %p\n", &a)
	fmt.Printf("a  = %p\n", a)

	tmp := *a
	*a = *b
	*b = tmp
	fmt.Printf("p1 = %v, p2 = %v\n", a, b)
}

func main() {

	var p1 myStruct
	p1.name = "p1_name"

	var p2 myStruct
	p2.name = "p2_name"

	swap(p1, p2)
	// fmt.Printf("p1 = %v, p2 = %v\n", p1, p2)

	swap2(&p1, &p2)
	fmt.Printf("&p1 = %p\n", &p1)

	// fmt.Printf("p1 = %v, p2 = %v\n", p1, p2)
	c1 := Children{
		cname: "c1",
		cage:  12,
	}

	po1 := Person{name: "p1", age: 12, children: []*Children{
		&c1,
	}}
	po2 := Person{name: "p2", age: 12}

	fmt.Printf("po1 addr: %p \n", &po1)
	fmt.Printf("po2 addr: %p \n", &po2)

	pointStruct(&po1)
	valueStruct(po2)

	fmt.Printf("po1.name: %s \n", po1.name)
	fmt.Printf("po2.name: %s \n", po2.name)
}

func pointStruct(p *Person) {
	fmt.Printf("[在这里修改值会影响到原始值， 对内存影响小] p in pointStruct addr, &p: %p ,p: %p \n", &p, p)
	p.name = "inner pointStruct p"
}

func valueStruct(p Person) {
	fmt.Printf("[在这里修改值不会影响到原始值， 对内存影响大] p in valueStruct addr, &p: %p ,p: %p \n", &p, p)
	p.name = "inner valueStruct p"
}
