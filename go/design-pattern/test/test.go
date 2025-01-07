package main

import (
	"bufio"
	"design-pattern/create"
	"fmt"
	"os"
	"strings"
)

func main() {

	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {

		input := scanner.Text()

		if input == "" {
			break
		}

		parts := strings.Fields(input)
		name := parts[0]

		sf, err := create.SimpleFactory(name)

		if err != nil {
			fmt.Printf("printf: ", err)
			return
		}

		sf.Product()

	}
}
