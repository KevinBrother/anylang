// function

fn main() {
    let x = plus_or_minus(4);
    println!("The value of x is {}", x);

    dead_end();
}

fn plus_or_minus(x: i32) -> i32 {
    if x > 5 {
        return x - 5;
    }

    x + 5
}

/**
 * 永不返回的发散函数 ！
 * ! 作为返回类型，表示函数用不返回(diverge function), 往往用做会导致程序崩溃的函数
 */
fn dead_end() -> ! {
    panic!("崩溃吧！")
}
