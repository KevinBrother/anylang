package base

import (
	"strconv"
	"testing"
)

func TestLen(t *testing.T) {

	s := "hello 世界"

	println(len(s))         // 12 个字节
	println(len([]rune(s))) // 8 个字符
}

func TestConv(t *testing.T) {
	r := 'a'
	println(int(r))

	var b byte = 'A' // 'A' 的ASCII码是65
	println(rune(b))

	s := "100"
	i, _ := strconv.Atoi(s)
	println(i)
}
