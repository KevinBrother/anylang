package main

import "fmt"

type myStruct struct {
	name string
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
}
