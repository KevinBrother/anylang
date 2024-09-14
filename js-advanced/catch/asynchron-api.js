// 不统一的异步 api
const fs = require("fs");
const cache = {};

function inConsistentRead(filename, callback) {
    if(cache[filename]) {
        // 同步读取
        callback(cache[filename]);
    } else {
        // 异步读取
        fs.readFile(filename, "utf8", (err, data) => {
            if(err) {
                throw err;
            }
            cache[filename] = data;
            callback(data);
        });
    }
}


function createFileReader(filename) {
    const listeners = [];

    inConsistentRead(filename, value => {
        listeners.forEach(listener => listener(value));
    });

    return {
        onDataReady: listener => listeners.push(listener)
    };
}


const reader1 = createFileReader("./catch.js");
reader1.onDataReady(data => {
    console.log("First call data: " + data);

    const reader2 = createFileReader("./catch.js");
    reader2.onDataReady(data => {
        console.log("Second call data: " + data);
    });
});