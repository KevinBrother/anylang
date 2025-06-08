// variable

fn main() {
    variable();
    deconstruct();
    assignments();
    shadowing();
}

/**
 * 1. 变量绑定
 */
fn variable() {
    // 变量前加 _ 可以让编译器忽略未使用的警告
    let _x = 2; // 不可变变量 类似 constant，但不是。
    let mut _y = 3; // 可变变量
    _y = 30
}

/**
 *
 *  2. 变量解构、赋值
 */

fn deconstruct() {
    let (x, mut y) = (true, false);

    println!("deconstruct: a = {:?}, b = {:?}", x, y);

    y = true;
    assert_eq!(x, y);
}

struct Struct {
    e: i32,
}

/**
 * 3. 解构式赋值
 */
fn assignments() {
    let (a, b, c, d, e);
    (a, b) = (1, 2);
    [c, .., d, _] = [1, 2, 3, 4, 5];
    Struct { e, .. } = Struct { e: 5 };
    assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e])
}

/**
 * 变量遮蔽
 */
fn shadowing() {
    let a = 1;
    let a = a + 2;

    {
        let a = a * 2;
        println!("shadowing: the value of x in the inner scope is: {}", a);
    }

    println!("shadowing: The value of a is : {}", a)
}
