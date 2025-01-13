package test

import (
	"strings"
	"testing"
)

func TestStringFn(t *testing.T) {
	s := "a,b,c" // 字符串
	t.Logf("str: value %s type: %T", s, s)
	str := []string{"hello", "world", "go"} // 字符串切片
	t.Logf("str: value %s type: %T", str, str)
	sA := strings.Split(s, ",")
	t.Log(sA)
	sA = append(sA, "dd")
	t.Log(sA)
	s = strings.Join(sA, "-")
	t.Log(s, len(s))
}
