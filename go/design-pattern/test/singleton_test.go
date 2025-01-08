package main

import (
	"design-pattern/create"
	"testing"
)

func TestSingleton(t *testing.T) {

	cart := create.GetInstance()

	cart.AddProduct("apple", 3)
	cart.AddProduct("Banana", 2)
	cart.AddProduct("Orange", 5)

	cart.PrintInfo()

}
