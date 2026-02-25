# uv-project

(uv doc)[https://docs.astral.sh/uv/]

``` bash

uv init # [xxx]  cd xxx


uv run main.py

uv add requests

uv add -r requirements.txt
```


## 模块化

Python 运行时会把脚本所在目录（不是工作目录）加入 sys.path：

| 运行方式 |	加入 sys.path 的路径 |	utils 能否找到|
|---|---|---|
| uv run exec/exec.py	| uv-test/exec/	|❌|
| uv run main.py	| uv-test/	|✅|
| uv run -m exec.exec	| uv-test/（当前目录）	|✅|