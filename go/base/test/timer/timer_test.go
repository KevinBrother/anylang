package timer

import (
	"fmt"
	"testing"
	"time"
)

func TestTimer(t *testing.T) {

	timer := time.NewTimer(time.Second)
	// timer := time.NewTicker(time.Second)

	go func() {
		for time := range timer.C {
			fmt.Printf("time: %v\n", time)
		}
	}()

	time.Sleep(3 * time.Second)
}
