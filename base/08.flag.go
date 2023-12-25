package main

import (
	"flag"
	"fmt"
	"strings"
)

var n = flag.Bool("n", false, "omit trailing newline")

//n = :flag.Bool("n", false, "omit trailing newline")
var sep = flag.String("s", " ", "separator")

//sep = :flag.String("s", " ", "separator")

func main() {
	flag.Parse()
	fmt.Println(flag.Args())
	fmt.Print(strings.Join(flag.Args(), *sep))
	if !*n {
		fmt.Println()
	}
}
