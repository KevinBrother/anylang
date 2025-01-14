package interfaceP

import (
	"fmt"
	"testing"
)

type Pet interface {
	Speak() string
}

// 非指针类型实现接口
type Dog struct{}

func (d Dog) Speak() string {
	return "Woof!"
}

type Cat struct{}

func (c Cat) Speak() string {
	return "Miao!"
}

func Say(p Pet) {
	fmt.Printf("%T : %s \n", p, p.Speak())
}

func TestMain(t *testing.T) {
	dog := Dog{} // 非指针类型
	cat := new(Cat)
	Say(dog)
	Say(cat)
}
