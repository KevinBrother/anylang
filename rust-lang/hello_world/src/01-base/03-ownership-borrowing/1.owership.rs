// ownership

fn main() {
    only_copy();
    ownership_move();
    func_move();
}

/**
 * 1. 在栈中直接拷贝， 没有发生所有权的转移
 * - 固定大小的简单值,直接存在了栈上
 */
fn only_copy() {
    let _x = 5;
    let _y = _x; // 变量绑定
}

/**
 * 2. 所有权规则
 * 一个值只能有一个所有者（如果有两个所有者，会产生 二次释放的 bug ），该变量称为值的所有者。
 * 当所有者（变量）离开作用域范围时，这个值将被丢弃（drop）
 */

/**
 *  String 在堆中
 *  堆指针、字符串长度、字符串容量
 */

/**
 * 存储在堆上，不能自动拷贝
 *
 * String 在堆中
 *
 *
 */
fn ownership_move() {
    let s1 = String::from("hello");
    let s2 = s1; // 浅拷贝； s1 指针指向的地址 move 到了 s2 指针的值中。浅拷贝只发生在栈上，速度快
    println!("ownership_move: s2: {} ", s2)
}

/**
 * 3. 函数传值与返回
 */
fn func_move() {
    main();

    fn main() {
        let s = String::from("hello");
        takes_ownership(s);
        // println!("{}", s); // s的所有权，已经通过函数被转移掉了
        let x = 5;
        makes_copy(x);

        let g_s = gives_ownership();
        println!("{}", g_s);
    }

    fn takes_ownership(some_string: String) {
        println!("{}", some_string)
    }

    fn makes_copy(some_integer: i32) {
        println!("{}", some_integer)
    }

    fn gives_ownership() -> String {
        let some_string = String::from("gives_ownership");

        some_string
    }
}
