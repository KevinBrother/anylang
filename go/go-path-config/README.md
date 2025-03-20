# GOPATH 项目的模块方案注意点

## 关闭 GOMODULE

```bash
export GO111MODULE=off
```

## 查找规则

- 查找 GOPATH 指定目录中的 src 目录、包、和文件
- 如果没有设置 src，可以使用相对路径导入

## go MOD 则不需要

- 使用 go mod 时，不需要设置 GOPATH和 src，只需要设置 GOMODULE 为 on

- 初始化 go mod

```bash

go mod init xxxx

```
