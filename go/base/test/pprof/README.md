# pprof

- go 内置的性能检测工具

##

- 启动后，访问 <http://localhost:6060/debug/pprof/>
- 火焰图：

``` bash
go tool pprof -http=:8080 http://localhost:6060/debug/pprof/profile
```
