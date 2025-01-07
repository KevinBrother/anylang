package create

import (
	"fmt"
	"sync"
)

var once sync.Once

type ShopCar struct {
	product map[string]int
}

var shopCarInstance *ShopCar

func GetInstance() *ShopCar {
	once.Do(func() {
		shopCarInstance = &ShopCar{}
	})

	return shopCarInstance
}

func (sc *ShopCar) AddProduct(itemName string, count int) {
	fmt.Println("add Procuct")

	if _, exists := sc.product[itemName]; !exists {
		sc.product[itemName] += count
	}
}

func (sc *ShopCar) PrintInfo() {
	for k, v := range sc.product {
		fmt.Println("%s %d", k, v)
	}
}
