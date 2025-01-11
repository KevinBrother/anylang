package structural

import (
	"fmt"
)

type IDevice interface {
	turnOff()
}

type Air struct {
	name string
}

func (a Air) turnOff() {
	fmt.Println(a.name, "  Conditioner is turned off.")
}

type Desk struct {
	name string
}

func (a Desk) turnOff() {
	fmt.Println(a.name, "  Conditioner is turned off.")
}

type Television struct {
	name string
}

func (a Television) turnOff() {
	fmt.Println(a.name, "  Conditioner is turned off.")
}

type Choice = int

const (
	Choice1 Choice = iota + 1
	Choice2
	Choice3
	Choice4
)

type DeviceFaced struct {
}

func (df DeviceFaced) NumberControl(number Choice) {
	switch number {
	case 1:
		Air{name: "Air"}.turnOff()
	case 2:
		Desk{name: "Desk"}.turnOff()
	case 3:
		Television{name: "Television"}.turnOff()
	case 4:
		fmt.Println("All devices are off.")
	default:
		// fmt.Printf("error %v", 1)
		fmt.Println("值只能是 1， 2， 3， ，4, 其中之一")
	}
}
