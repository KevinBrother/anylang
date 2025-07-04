package outer

import (
	"dep-build/outer/inner"
	"fmt"
)

func GetBrother() {
	// 无法 inner.Inner.name
	fmt.Printf("%+v\n", inner.Inner)
	fmt.Println(b.name)
}
