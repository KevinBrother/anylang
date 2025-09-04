package cgo

import (
	"fmt"
	"testing"
)

func TestAdd(t *testing.T) {
	// 测试C的add函数包装
	result := Add(10, 20)
	expected := 30
	if result != expected {
		t.Errorf("Add(10, 20) = %d; want %d", result, expected)
	}
	fmt.Printf("Go: 10 + 20 = %d\n", result)
}

func TestPrintMessage(t *testing.T) {
	// 测试C的print_message函数包装
	PrintMessage("Hello from Go!")
}

func TestDemo(t *testing.T) {
	// 测试演示函数
	Demo()
}
