package base

import (
	"math/rand"
	"testing"
)

func TestInt(t *testing.T) {
	i := rand.Intn(100) // 0 ~ 99

	println(i)
}

func Test(t *testing.T) {
	charset, n := "acegbdf", 2
	r := RandDigits(charset, n)
	println(r)
}

func RandDigits(charset string, n int) string {
	l := len(charset)

	b := make([]byte, n)
	for i := range b {
		b[i] = charset[rand.Intn(l)]
	}

	return string(b)
}
