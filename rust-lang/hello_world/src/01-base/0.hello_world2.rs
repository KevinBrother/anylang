fn main() {
    let a: i32 = 10; // 通过类型注解指定 a 的类型为 i32
    let b: i32 = 20;
    let mut c = 20i32;
    c = 30;
    let d = 20_i32;

    let mut e = 10;
    e = 20;

    println!("{}", add(add(a, b), add(c, d)));
}

fn add(a: i32, b: i32) -> i32 {
    // return a + b
    a + b
}
