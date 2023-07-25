// 打印命令行参数
package main

import (
	"fmt"
	"os"
)

/**
practise:
1. 打印自己的名字
2. 打印命令行参数的索引和值，每个一行
*/
func main() {
	for index, arg := range os.Args[0:] {
		fmt.Println(index, arg)
	}
}

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

/*func main() {

	fmt.Println(strings.Join(os.Args[0:], " "))
	fmt.Println(os.Args[0:])
}
*/
