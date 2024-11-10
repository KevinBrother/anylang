# Rust base

## 安装 Rust 前先安装 rustup

- rustup 是 Rust 的安装程序，也是它的版本管理程序
- rustup 类似 node 中的 n 或 nvm

    ```bash
    rustup update
    rustup -V
    rustc -V
    cargo -V
    # 自带的本地文档 类似 man
    rustup doc
    ```

## 使用 Cargo 创建项目

- 包括 创建、构建、测试、运行甚至部署

``` bash
    cargo new hello_world
    cargo run # 默认 debug 模式
    cargo run --release
    cargo build --release
    cargo check # 速度快，只检查编译是否通过。因为 run 和 build 的编译速度还是比不上 go。和 C/C++一样 优化编译速度是门学问

```

## Cargo 更改源

[ ] <https://course.rs/first-try/slowly-downloading.html>

