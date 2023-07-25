// 打印命令行参数
package main

import (
	"fmt"
	"os"
	"strings"
)

/* func main() {
	var s string
	var step = " "
	for i := 0; i < len(os.Args); i++ {
		s += step + os.Args[i]
	}

	fmt.Println(s)
}
*/
/*
func main() {
	var s string
	var step = " "
	for _, arg := range os.Args[0:] {
		s += step + arg
	}

	fmt.Println(s)
}*/

func main() {

	fmt.Println(strings.Join(os.Args[0:], " "))
	fmt.Println(os.Args[0:])
}
