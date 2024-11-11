// reference and borrowing

fn main() {
    reference();
    i_mut_reference();
    mut_reference();
}

/**
 * 引用（&： 取址）与解引用（ *： 取值）
 * 引用：可以使用，但不获取所有权
 * 引用 在 rust 中 也称为 借用
 */
fn reference() {
    let x = 5;
    let y = &x;
    println!("x: {}, y: {}", x, *y)
}

/**
 * 可变量一样，默认的引用也是不可变的
 */
fn i_mut_reference() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);

    println!("i_mut_reference: the length of {} is {}", s1, len);

    fn calculate_length(s: &String) -> usize {
        s.len()
    }
}

/**
* 可变引用
* 同一作用于，特定数据只能有一个可变引用 （不然可能产生数据竞争）

* 借用规则
* 同一时刻，只能有用一个可变引用，或者多个不可变引用
*
*/
fn mut_reference() {
    let mut s1 = String::from("hello");
    let len = calculate_length(&mut s1);

    println!("mut_reference: the length of {} is {}", s1, len);

    println!("multi mut_reference, {}, {}", &s1, &s1);

    fn calculate_length(s: &mut String) -> usize {
        s.push_str(" world");
        s.len()
    }
}
