package assambly

import "testing"

// 声明汇编函数原型
func hello()

func TestASM(t *testing.T) {
	// 调用汇编函数
	hello()
}
