package test

import (
	"math"
	"testing"
)

func TestInit(t *testing.T) {
	m1 := map[string]int{"name": 12, "age": 12}
	m2 := map[string]int{}
	m2["good"] = 11
	m3 := make(map[string]int, 10)
	t.Log(len(m1), len(m2), len(m3))
	delete(m1, "name")
	t.Log(m1)
}

func TestKeyExist(t *testing.T) {

	// 使用 if 的方式来确定是key 不存在导致的值为0， 还是值真的为 0
	m1 := map[string]int{"chan": 0, "age": 12}
	t.Log(m1["chan"])

	if v, ok := m1["add"]; ok {
		t.Log(ok)
		t.Logf("key is exist: value : %d", v)
	} else {
		t.Log(ok)
		t.Logf("key is not exist: value : %d", v)
	}
}

func TestTravelMap(t *testing.T) {
	m1 := map[string]int{"name": math.MaxInt, "age": 12}
	for k, v := range m1 {
		t.Logf("key: %s, val: %d", k, v)
	}
}

func TestMapWithFuncVal(t *testing.T) {
	m1 := map[int]func(int) int{}
	m1[1] = func(i int) int { return i }
	m1[2] = func(i int) int { return i * i }
	m1[3] = func(i int) int { return i * i * i }

	n := 2
	t.Log(m1[1](n), m1[2](n), m1[3](n))
}

// go 中没有内置的 set，需要用 map 的 map[int]bool 模拟， 使用
func TestMap2Set(t *testing.T) {
	m1 := map[int]bool{}
	m1[1] = true

	key := 1
	if m1[key] {
		t.Logf("key: %d is exist", key)
	} else {
		t.Logf("key: %d is not exist", key)
	}

	m1[2] = true

	t.Logf("set length is : %d ", len(m1))
}
