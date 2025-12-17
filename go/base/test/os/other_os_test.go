package os

import (
	"fmt"
	"os"
	"testing"
)

func TestExecutor(t *testing.T) {

	binPath, err := os.Executable()
	if err != nil {
		fmt.Println("error: ", err)
	}
	fmt.Println("executable rst: ", binPath)

	info, _ := os.Stat(binPath)

	fmt.Printf("mode: %#o, size: %d", info.Mode(), info.Size())
}
