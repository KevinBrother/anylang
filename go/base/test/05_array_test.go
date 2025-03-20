package test

import (
	"fmt"
	"testing"
)

func TestArray(t *testing.T) {
	// 打印 t 传过来的指针
	fmt.Printf("t addr: %p \n", t)
	fmt.Printf("&t addr: %p\n", &t)
	fmt.Printf("t  type: %T\n", t)
	arr := [4]int{1, 2, 3, 4}
	arr2 := [...]int{2, 4, 5, 5}
	arr3 := [...]int{1, 2, 3, 4}

	// 数组的维度和长度一致就可以进行比较，slice 不能比较
	t.Log(arr == arr2, arr == arr3)
}

func TestSlice(t *testing.T) {
	//
	y := []string{"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"}
	// 增
	y = append(y, "December")
	summer := y[3:6]
	t.Log(y, len(y), len(y))

	// 切片后，len 和内容只有参数选中的部分，但是 容量却是 len(y) - 切片开始的部分
	t.Log(summer, len(summer), cap(summer))

	// 更改其中一个所有的slice 都会受到影响
	change := y[4:5]
	change[0] = "unKnow"
	t.Log(y, len(y), len(y))
	t.Log(summer, len(summer), cap(summer))
}
