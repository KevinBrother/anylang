package create

import (
	"fmt"
	"sync"
)

var once sync.Once

type lazyShopCar struct {
	product map[string]int
}

// 饿汉模式
/*
var shopCarInstance = &lazyShopCar{
	product: make(map[string]int),
}
*/

var shopCarInstance *lazyShopCar

func GetInstance() *lazyShopCar {
	once.Do(func() {
		shopCarInstance = &lazyShopCar{
			product: make(map[string]int),
		}
	})

	return shopCarInstance
}

func (sc *lazyShopCar) AddProduct(itemName string, count int) {

	if _, exists := sc.product[itemName]; !exists {
		sc.product[itemName] = count
	} else {
		sc.product[itemName] += count
	}
}

func (sc *lazyShopCar) PrintInfo() {
	for k, v := range sc.product {
		fmt.Printf("%s %d\n", k, v)
	}
}
