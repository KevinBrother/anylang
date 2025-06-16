const str = "Numbers: 2, 4, 6";

// 使用 replaceAll 匹配数字并替换为平方
const result = str.replaceAll(/(\d)/g, (match, ...strArr) => {
    console.log('match: ', match)
    strArr.forEach((item, index) => {
        console.log(`${index}: `, item)
    })
    const num = parseInt(match); // 将匹配到的字符串转为数字
    return num * num; // 返回平方
});

console.log('result: ', result)