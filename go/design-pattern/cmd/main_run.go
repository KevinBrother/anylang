package main

import (
	"bufio"
	"design-pattern/create"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {

	cart := create.GetInstance()

	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {

		input := scanner.Text()

		if input == "" {
			break
		}

		parts := strings.Fields(input)
		itemName := parts[0]
		quantity, err := strconv.Atoi(parts[1])

		if err != nil {
			fmt.Printf("转换出错： %v\n", err)
			continue
		}

		if len(parts) > 1 {
			fmt.Sscanf(parts[1], "第二个字符 %d", quantity)
		}

		cart.AddProduct(itemName, quantity)
	}

	// cart.AddProduct("apple", 12)
	// cart.AddProduct("Origin", 12)
	// cart.AddProduct("banana", 12)

	cart.PrintInfo()
}
