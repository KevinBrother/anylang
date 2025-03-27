package main

import "fmt"

// Person 结构体定义，包含一个切片类型的属性
type Person struct {
	name    string
	age     int
	myMap   map[string]string
	array   *[2]int
	mySlice *[]string
}

// valueStruct 接收 Person 类型的值
func valueStruct(p Person) {
	fmt.Printf("hoobie: %p\n", p.mySlice)
	p.array[0] = 1
	p.array[0] = 2
	p.myMap["key1"] = "val1"
	*p.mySlice = append(*p.mySlice, "reading")
	fmt.Printf("Inside valueStruct: mySlice = %v\n", *p.mySlice)
	fmt.Printf("Inside valueStruct: array = %v\n", p.array)
	fmt.Printf("Inside valueStruct: myMap = %v\n", p.myMap)
}

func main() {

	po2 := Person{
		name:    "p2",
		age:     12,
		myMap:   make(map[string]string),
		array:   &[2]int{},
		mySlice: &[]string{"swimming"},
	}

	fmt.Printf("hoobie: %p\n", po2.mySlice)
	valueStruct(po2)
	fmt.Printf("Outside valueStruct: mySlice = %v\n", po2.mySlice)
	fmt.Printf("Outside valueStruct: array = %v\n", po2.array)
	fmt.Printf("Outside valueStruct: map = %v\n", po2.myMap)
}
