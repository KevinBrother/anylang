package main

import (
	"fmt"
	// 需要使用 GOPATH 来导入
	"utils"

	"../../outer"
)

func main() {
	fmt.Println("outer", outer.Add(2, 3))
	fmt.Println("inner", utils.Add(1, 2))
}
