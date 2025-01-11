package test

import "testing"

func TestConstant(t *testing.T) {

	const (
		Readable   = 1 << iota // 0001
		Writeable              // 0010
		Executable             // 0100
	)
	t.Log(Readable, Writeable, Executable)

	flag := 7
	t.Log(flag&Readable == Readable, flag&Writeable == Writeable, flag&Executable == Executable)
}
