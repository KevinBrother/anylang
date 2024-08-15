# Makefile

[参考文档](https://liaoxuefeng.com/books/makefile/makefile-basic/index.html)

``` bash
# makefile 中规则的格式 
目标文件: 依赖文件1 依赖文件2
    命令1
    命令2
```

## 执行

``` bash
# 直接运行 make，默认执行第一条规则
make 
```

## 伪目标

make 把 目标文件 不要视为文件

``` bash

.PHONY: clean # 把 clean 不作为文件（伪目标）
clean: 
 rm -f x.txt m.txt
```

## 执行多行命令

1. make 针对每条(行)命令，都会创建一个独立的 Shell 环境，目录操作互不影响
2. 可以使用';' 分割统一环境，可在结尾加上 '\' 作为换行
3. 也可以使用 '&&', 当指令失败时，不会继续执行

## 控制打印

添加 '@' 可以不打印执行的命令是什么，只展示命令运行的结果

## 忽略错误

命令中发生错误时（返回非 0 值），默认会中断后面的命令。在命令前加上'-'，可以忽略错误，继续执行。
