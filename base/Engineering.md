# 工程化相关

## 单文件

``` bash
# 编译
go build  -o hello.out 01.hello.go

# 运行
./hello.out
```

## [多文件](../multi-build)
1. 先创建 go.mod 文件

```bash

go mod init go-project

```

2. 在main 中导入
```go
import (
"go-project/xxxx"
)

```

3. 运行
```bash
 go run main.go
```

## [工程化](../dep-build)

### 下载依赖，使用以来，上传依赖