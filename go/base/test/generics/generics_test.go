package generics

import (
	"testing"
)

type Number interface{ ~int | ~float64 }

func Max[T Number](a, b T) T {
	if a > b {
		return a
	}

	return b
}

func TestExtend(t *testing.T) {
	b := Max(1.2, 2)

	println(b)
}
