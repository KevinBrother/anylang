Promise.resolve('good').then((data) => {
    console.log(data)
}).then(rst => {
    console.log(rst);
})

Promise.reject('err').then((data) => {
    console.log(data)
},(err) => {
    console.log('err: ', err)
})

new Promise((resolve, reject) => {
    resolve(1);
}).then(data => {
    console.log(data);
})