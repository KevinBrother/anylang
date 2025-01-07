package create

import (
	"errors"
	"fmt"
)

type IFactory interface {
	Product()
}

type CircleFactory struct {
	name string
}

type SquareFactory struct {
	name string
}

func SimpleFactory(name string) (IFactory, error) {

	if name == "Circle" {
		cf := CircleFactory{
			name,
		}
		return &cf, nil
	} else if name == "Square" {
		cf := SquareFactory{
			name,
		}
		return &cf, nil

	} else {
		// 打印错误
		return nil, errors.New("类型只能是 Circle 或者 Square")
	}
}

func (cf *CircleFactory) Product() {
	fmt.Println(cf.name, " Block")
}

func (cf *SquareFactory) Product() {
	fmt.Println(cf.name, " Block")
}
