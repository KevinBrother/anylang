package interfaceP

import (
	"fmt"
	"testing"
)

func PrintTypeSwitch(p interface{}) {
	v, ok := p.(int)
	fmt.Printf("value: %d, Ok?: %t\n", v, ok)

	switch v := p.(type) {
	case int:
		fmt.Println("int", v)
	case string:
		fmt.Println("string", v)
	default:
		fmt.Println("UnKnow", v)
	}
}

func TestEmpty(t *testing.T) {
	PrintTypeSwitch(12)
	PrintTypeSwitch("12")
	PrintTypeSwitch([]byte("12"))
}
