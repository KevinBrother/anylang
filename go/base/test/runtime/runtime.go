package runtime

import (
	"fmt"
	"runtime"
	"strconv"
	"strings"
)

func GetGoID() int {
	var buf [64]byte
	n := runtime.Stack(buf[:], false)
	idField := strings.Fields(strings.TrimPrefix(string(buf[:n]), "goroutine"))

	goID := idField[0]
	// fmt.Println("string(buf[:n]): ", idField)

	id, err := strconv.Atoi(goID)
	if err != nil {
		panic(fmt.Sprintf("cannot get goroutine id %v", err))
	}

	return id
}
