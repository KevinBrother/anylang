package main

import (
	"design-pattern/create"
	"testing"
)

func TestSimpleFactory(t *testing.T) {

	sf := create.SimpleFactory{
		Blocks: make([]create.IBlock, 0),
	}

	sf.AddBlocks(&create.CircleBlocksFactory{}, 1)
	sf.AddBlocks(&create.SquareBlocksFactory{}, 2)
	sf.AddBlocks(&create.CircleBlocksFactory{}, 1)

	sf.PrintBlocks()
}
