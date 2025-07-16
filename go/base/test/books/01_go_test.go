package books

import (
	"fmt"
	"testing"
	"time"
)

func TestVar(t *testing.T) {

	var list []int

	go func(l int) {
		time.Sleep(time.Microsecond)
		// 每次运行还是会从上下文中获取变量吗？
		fmt.Printf("pass len: %d, current len: %d ", l, len(list))
	}(len(list))

	list = append(list, 1)
	time.Sleep(time.Second)
}
