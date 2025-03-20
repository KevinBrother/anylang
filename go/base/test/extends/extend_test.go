package interfaceP

import (
	"fmt"
	"testing"
)

type Pet struct {
}

func (p *Pet) Speak() {
	fmt.Println("...")
}

func (p *Pet) SpeakTo(name string) {
	p.Speak()
	fmt.Println(name)
}

type Dog struct {
	Pet
}

func (d *Dog) Speak() {
	fmt.Println("Wang")
}

// go  中 没有继承的概念，Dog 的 Speak 函数并没有重写掉 Pet 的 Speak 函数
func TestExtend(t *testing.T) {
	d := new(Dog)

	d.SpeakTo("Kss")
}
