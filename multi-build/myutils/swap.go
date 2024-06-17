package myutils

import (
	"bytes"
	"compress/gzip"
)

func Change(a *int, b *int) {
	tmp := *a
	*a = *b
	*b = tmp
}

func CompressText(text string) ([]byte, error) {
	var buf bytes.Buffer
	gzWriter := gzip.NewWriter(&buf)

	_, err := gzWriter.Write([]byte(text))
	if err != nil {
		return nil, err
	}

	if err := gzWriter.Close(); err != nil {
		return nil, err
	}

	return buf.Bytes(), nil
}
