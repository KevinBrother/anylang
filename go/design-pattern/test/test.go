package main

import "design-pattern/create"

func main() {
	sp := create.GetInstance()
	sp.AddProduct("apple", 12)
	sp.AddProduct("Origin", 12)
	sp.AddProduct("banana", 12)

	sp.PrintInfo()
}
