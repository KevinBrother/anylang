// numerical

fn main() {
    integer();
    float();
    nan();
    range();
    num();
}

/**
 * 1. 整形
 */
fn integer() {
    // TODO 整形溢出的案例
    println!("integer: TODO")
}

/**
 * 2. float
 *
 * 避免在浮点数上测试相等性
 */

fn float() {
    let _x = 2.0; // default is f64 ，速度和 f32一样，精度更高
    let _y: f32 = 3.0;
}

/**
 * 3. NaN (not a number)
 *
 * 和 js 类似
 *
 */

fn nan() {
    let x = (-42.0_f32).sqrt();
    if x.is_nan() {
        println!("nan: 未定义的数学行为")
    }
}

/**
 * 4. 序列，用于生成连续的数值
 * 只能数字或字符类型
 */
fn range() {
    // 1..5，不包含 5
    println!("range start");
    for i in 1..=5 {
        print!("{} , ", i);
    }
    println!();
    for i in 'a'..='z' {
        print!("{} , ", i);
    }
    println!();
    println!("range end");
}

use num::complex::Complex;

/**
 * 5. 有理数和复数
 * // TODO
 */
fn num() {
    let a = Complex { re: 2.1, im: -1.2 };
    let b = Complex::new(11.1, 22.2);
    let result = a + b;

    println!("{} + {}i", result.re, result.im);
}
