package sd

import (
	"fmt"
	"math"
	"testing"
)

func TestHypot(t *testing.T) {

	rst := math.Hypot(20, 99)
	fmt.Println(rst)
}
