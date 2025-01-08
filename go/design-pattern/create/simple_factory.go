package create

import (
	"fmt"
)

type IBlock interface {
	Product()
}

type CircleBlocks struct {
	name string
}

func (cb *CircleBlocks) Product() {
	fmt.Println(cb.name, " Block")
}

type SquareBlocks struct {
	name string
}

func (sb *SquareBlocks) Product() {
	fmt.Println("Square Block")
}

type IFactory interface {
	createBlock() IBlock
}

type CircleBlocksFactory struct{}

func (cf *CircleBlocksFactory) createBlock() IBlock {
	return &CircleBlocks{
		name: "Circle",
	}
}

type SquareBlocksFactory struct{}

func (cf *SquareBlocksFactory) createBlock() IBlock {
	return &SquareBlocks{
		name: "Square",
	}
}

type SimpleFactory struct {
	Blocks []IBlock
}

func (sf *SimpleFactory) AddBlocks(f IFactory, count int) {
	for i := 0; i < count; i++ {
		sf.Blocks = append(sf.Blocks, f.createBlock())
	}
}

func (sf *SimpleFactory) PrintBlocks() {
	for _, v := range sf.Blocks {
		v.Product()
	}
}
