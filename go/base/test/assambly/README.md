# go 中 使用 asm

## 内接 asm

暂时了解到的是不需要单独配置，go 自己会处理 asm 的文件

## 验证汇编文件是否能单独通过 Go 汇编器编译

``` bash
go tool asm -v hello_amd64.s
```
