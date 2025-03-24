package test

import (
	"testing"
	"time"
)

func TestTimeFormate(t *testing.T) {
	// 在 Go 语言里，2006 是固定用来表示年份的格式。这是因为 Go 语言的设计者认为使用一个特定的时间点来表示格式，比传统的格式化字符串（像 %Y-%m-%d %H:%M:%S）更直观、好记。
	// 2006-01-02 15:04:05 是 Go 语言官方选定的参考时间，它的各个部分分别对应了年、月、日、时、分、秒，不能随意更改
	r := time.Now().Format("20060102150405")
	println("t:", r)

}
