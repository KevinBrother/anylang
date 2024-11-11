// statements and expressions

fn main() {
    println!("example的结果是： {}", example(1, 2));

    assert_eq!(ret_unit_type(), {});
}

/**
 * 语句执行操作，但不会返回一个值
 * 表达式会在求值后返回一个值。
 *    调用[函数、宏]也是一个表达式 ... 。
 *    能返回值就是一个表达式
 */
fn example(x: i32, y: i32) -> i32 {
    let x = x + 1; // 语句
    let y = y + 5; // 语句

    let z = {
        let x = 3;
        x + 1 // 表达式结尾不能有 分号，如果有分号就会变成语句，而不会返回值。
    };

    x + y + z // 表达式
}

/**
 * 如果表达式不返回任何值，会隐式返回一个 ()
 */
fn ret_unit_type() {
    let x = 1;
    // if 语句块也是一个表达式 rust 无三元运算符
    let _y = if x % 2 == 1 { "odd" } else { "even" };
}
