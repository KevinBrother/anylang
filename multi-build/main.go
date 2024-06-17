package main

import (
	"fmt"
	"go-project/myutils"
)

func main() {
	var a = 10
	var b = 20

	fmt.Println("before swap", a, b)
	myutils.Change(&a, &b)
	fmt.Println("after swap", a, b)
}
