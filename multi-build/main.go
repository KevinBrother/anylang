package main

import (
	"fmt"
	_ "go-project/init-test"
	"go-project/myutils"
	"log"
)

func main() {

	var a = 10
	var b = 20

	fmt.Println("before swap", a, b)
	myutils.Change(&a, &b)
	fmt.Println("after swap", a, b)

	fmt.Println("======================")

	text := "This is a sample text to be compressed."

	compressedData, err := myutils.CompressText(text)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Original Text Length:", len(text))
	fmt.Println("Compressed Data Length:", len(compressedData))
}
