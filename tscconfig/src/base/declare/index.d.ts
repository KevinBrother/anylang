// 在实际项目中，通常不会在 .ts 文件中直接使用 declare，而是将这些类型声明写在**类型定义文件（.d.ts）**中。

// 只声明，不定义
// declare 不会生成任何实际的 JavaScript 代码，它只在类型系统中生效。如果你想要实际的实现，请不要使用 declare。

// 编译后不会输出任何代码

declare var API_URL: string;
declare function fetchData(url: string): Promise<any>;

// declare 和 .d.ts 文件的关系
// .d.ts 文件是专门存储声明的文件，通常用于为第三方库定义类型文件