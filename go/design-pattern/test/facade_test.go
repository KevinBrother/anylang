package main

import (
	"design-pattern/structural"
	"testing"
)

func TestFacade(t *testing.T) {
	structural.DeviceFaced{}.NumberControl(structural.Choice1)
	structural.DeviceFaced{}.NumberControl(2)
	structural.DeviceFaced{}.NumberControl(3)
	structural.DeviceFaced{}.NumberControl(4)
	structural.DeviceFaced{}.NumberControl(5)
}
