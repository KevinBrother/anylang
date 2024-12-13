// declare 关键字用于声明但不定义变量、函数、类、枚举、命名空间或模块的类型。这是为了告诉 TypeScript 编译器：“这段代码的实现在其他地方，通常是外部的，比如 JavaScript 文件、全局环境、第三方库等。”

// ===== 声明全局变量
// 告诉 TypeScript：有一个名为 jQuery 的全局变量，类型是 any
declare var jQuery: any;

// 使用 jQuery（不会报错）
jQuery("#app").addClass("active");

// ===== 声明全局函数
declare function log(message: string): void;

// 调用 log 函数（不会报错）
log("Hello World");

// ===== 声明一个全局的命名空间
declare namespace MyNamespace {
  export const version: string;
  export function greet(name: string): void;
}

// 使用 MyNamespace
console.log(MyNamespace.version);
MyNamespace.greet("Alice");
