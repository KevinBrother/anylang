package create

import (
	"fmt"
	"sync"
)

var once sync.Once

type LazyShopCar struct {
	product map[string]int
}

// 饿汉模式
/*
var shopCarInstance = &LazyShopCar{
	product: make(map[string]int),
}
*/

var shopCarInstance *LazyShopCar

func GetInstance() *LazyShopCar {
	once.Do(func() {
		shopCarInstance = &LazyShopCar{
			product: make(map[string]int),
		}
	})

	return shopCarInstance
}

func (sc *LazyShopCar) AddProduct(itemName string, count int) {

	if _, exists := sc.product[itemName]; !exists {
		sc.product[itemName] = count
	}

	sc.product[itemName] += count
}

func (sc *LazyShopCar) PrintInfo() {
	for k, v := range sc.product {
		fmt.Printf("%s %d\n", k, v)
	}
}
