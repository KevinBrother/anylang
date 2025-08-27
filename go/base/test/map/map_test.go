package my_map

import (
	"fmt"
	"testing"
)

func TestMap(t *testing.T) {
	m := make(map[string]int)
	m["a"] = 0
	m["b"] = 2

	// 需要区分是真的 0 值还是，没有值（返回零值），所以需要两个返回值。
	bv, isExist := m["a"]
	fmt.Printf("m[\"a\"]: %d, isExist: %t, m[\"zero\"]: %d\n", bv, isExist, m["zero"])

	keys := make([]string, 0, len(m))

	vals := make([]int, 0, len(m))
	for k := range m {
		keys = append(keys, k)
		vals = append(vals, m[k])
	}

	for k, v := range m {
		keys = append(keys, k)
		vals = append(vals, v)
	}

	fmt.Printf("keys: %+v\n", keys)
	fmt.Printf("vals: %+v\n", vals)
}

func TestMap2(t *testing.T) {
	type mapKey struct {
		key int
	}

	m := make(map[mapKey]string)

	var key = mapKey{10}

	m[key] = "hello"

	fmt.Printf("m[key]=%s\n", m[key])

	key.key = 100
	// 修改 key 的值后将无法获取刚才添加的值
	fmt.Printf("再次查询 m[key]=%s\n", m[key])

}
