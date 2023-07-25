// 打印命令行参数
package main

import (
	"fmt"
	"os"
)

func main() {
	var s string
	var step = " "
	for i := 0; i < len(os.Args); i++ {
		s += step + os.Args[i]
	}

	fmt.Println(s)
}
