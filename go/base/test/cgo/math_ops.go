package cgo

import (
	"fmt"
	"unsafe"
)

/*
// 引用外部C文件
#cgo CFLAGS: -I.
#cgo LDFLAGS: -L. -lm
#include <stdlib.h>
#include "math_ops.h"
*/
import "C"

// Add wraps the C add function
func Add(a, b int) int {
	cA := C.int(a)
	cB := C.int(b)
	sum := C.add(cA, cB)
	return int(sum)
}

// PrintMessage wraps the C print_message function
func PrintMessage(msg string) {
	cMsg := C.CString(msg)
	defer C.free(unsafe.Pointer(cMsg)) // 释放C字符串内存
	C.print_message(cMsg)
}

// Demo demonstrates the CGO functionality
func Demo() {
	// 调用C的add函数
	result := Add(10, 20)
	fmt.Printf("Go: 10 + 20 = %d\n", result)

	// 调用C的print_message函数
	PrintMessage("Hello from Go!")
}