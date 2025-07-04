package main

import (
	"dep-build/outer"
	"fmt"

	"github.com/google/go-cmp/cmp"
)

func main() {
	outer.GetBrother()
	fmt.Println("third mod cpm result: ", cmp.Equal(1, 2))
}
