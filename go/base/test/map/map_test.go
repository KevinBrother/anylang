package my_map

import (
	"fmt"
	"testing"
)

func TestMap(t *testing.T) {
	m := make(map[string]int)
	m["a"] = 1
	m["b"] = 2

	fmt.Println("a[\"b\"]: ", m["b"])

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
