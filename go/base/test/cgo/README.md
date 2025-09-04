# cgo

- cgo 导入：import "C" 语句是 cgo 的特殊标记，告诉 Go 编译器处理前面的 C 代码块

## 编译

``` bash
# 可以不编译 c 文件，直接编译 go 文件，直接使用go run命令即可，Go 会自动处理 C 代码的编译和链接：

go test -v

# gcc -c math_ops.c -o math_ops.o
```
