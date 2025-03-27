package test

import (
	"base_test/file"
	"fmt"
	"io/fs"
	"path/filepath"
	"testing"
)

func TestWalk(t *testing.T) {
	root := "."

	err := filepath.Walk(root, func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if file.IsDir(path) {
			return nil
		}

		fmt.Println(path)
		return nil
	})

	if err != nil {
		fmt.Println("error walking the path:", err)
	}
}
