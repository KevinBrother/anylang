package main

import (
	"fmt"
	"utils"

	"../../outer"
)

func main() {
	fmt.Println("outer", outer.Add(2, 3))
	fmt.Println("inner", utils.Add(1, 2))
}
