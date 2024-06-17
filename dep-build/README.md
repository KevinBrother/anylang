# 三方依赖


## Go 1.16 开始 使用 go.mod 替代 GOPATH 管理项目
```bash
go mod init xxxx
```

## 查看并修改 go 的源
```bash

go env # go env | grep GOPROXY

# 阿里云
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct
```

## [下载依赖](https://pkg.go.dev/)
```  bash
# 下载 cmp 包
go get -u github.com/google/go-cmp/cmp
```

## go自动下载所有的依赖包
``` bash
 go mod download  
```

## 上传自己的依赖
[ ] todo