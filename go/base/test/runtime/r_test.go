package runtime

import (
	"fmt"
	"testing"
)

func TestGoID(t *testing.T) {
	id := GetGoID()

	fmt.Println("goID: ", id)
}
