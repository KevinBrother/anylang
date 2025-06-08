// char-bool-unit

fn main() {
    char();
    bool();
    unit_type();
}

/**
 * 1. 字符
 */
fn char() {
    let _c = 'z';
    let _z = 'Z';
    let _g = '中';
    let emo = '😂';

    println!(
        "字符类型占用 {} 字节的内存大小",
        std::mem::size_of_val(&emo)
    );
}

/**
 * 2. bool
 */

fn bool() {
    let _t = true;
    let f: bool = false;

    if f {
        println!("无意义的代码")
    }
}

/**
 * 3. 单元类型 ()
 */

fn unit() {
    println!("main 函数返回的就是 单元类型");
}
