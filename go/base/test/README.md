# Test

``` bash

# 测试整个项目
go test

# 打印信息
go test -v

# 测试  go/base/test/json 目录下 所有的 Test 开头的函数 （需要指定路径）
go test -v -run ^Test base_test/json

# 测试所有带有 Marshal的函数（需要指定路径）
go test -v -run Marshal base_test/json

# 测试具体函数（需要指定路径）
go test -v -run ^TestMarshal$ base_test/json
```

## TODO

[ ] mutex
    [ ] RecursiveMutex
    [ ] safeMap
    [ ] safeSlice

[ ] hchan
