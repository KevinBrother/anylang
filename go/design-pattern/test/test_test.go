package main

import (
	"bytes"
	"design-pattern/create"
	"os"
	"testing"
)

/* func TestError(t *testing.T) {

	sum := create.Add(1, 2)

	if sum != 3 {
		t.Errorf(" 期望获得 3, 但得到了 %d", sum)
	}
} */

func TestAdd(t *testing.T) {

	sum := create.Add(1, 2)

	if sum != 3 {
		t.Errorf(" 期望获得 3, 但得到了 %d", sum)
	}
}

// 测试输出流
func TestPrintABC(t *testing.T) {
	// 保存原始的标准输出
	old := os.Stdout
	r, w, _ := os.Pipe()
	os.Stdout = w

	// 调用要测试的函数
	create.PrintABC()

	// 关闭写入端并恢复标准输出
	w.Close()
	os.Stdout = old

	// 读取输出结果
	var buf bytes.Buffer
	_, _ = buf.ReadFrom(r)
	output := buf.String()

	// 断言输出结果是否为 "abc"
	if output != "abc" {
		t.Errorf("期望输出 'abc'，但得到 '%s'", output)
	}
}
