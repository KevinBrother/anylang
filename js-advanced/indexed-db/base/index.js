// 创建/打开数据库
function handlerUpgraded(event) {
    const userTable = createObjectStore(event.target, "user-table");
    console.log("userTable", userTable);
    const nameIndex = createIndex(userTable, "name", "name", {
        unique: true,
    });
    console.log("nameIndex", nameIndex);
    createIndex(userTable, "age", "age");
    queryRecord(userTable, 1)
        .then((result) => {
        console.log("记录查询成功", result);
    })
        .catch((error) => {
        console.log("记录查询失败", error);
    });
}
const openRequest = indexedDB.open("indexed-db-test", 3);
openRequest.onerror = (event) => {
    console.log("数据库打开失败", event.target.error);
};
openRequest.onsuccess = (event) => {
    console.log("数据库打开成功", event.target.result);
    const userTable = openRequest.result
        .transaction("user-table", "readwrite")
        .objectStore("user-table");
    console.log("userTable", userTable);
    queryRecord(userTable, 1)
        .then((result) => {
        console.log("记录查询成功", result);
    })
        .catch((error) => {
        console.log("记录查询失败", error);
    });
    readAllRecord(userTable)
        .then((result) => {
        console.log("记录查询成功", result);
    })
        .catch((error) => {
        console.log("记录查询失败", error);
    });
};
openRequest.onupgradeneeded = (event) => {
    console.log("数据库升级", event.target.result);
    handlerUpgraded(event);
};
// 创建对象仓库(类似关系型数据库的表)
function createObjectStore(openRequest, objectStoreName) {
    // 增删改查需要通过事务来操作
    // TODO: 如果对象仓库已经存在，则直接返回  这个判断无效
    if (openRequest.result.objectStoreNames.contains(objectStoreName)) {
        return openRequest.result
            .transaction(objectStoreName, "readwrite")
            .objectStore(objectStoreName);
    }
    return openRequest.result.createObjectStore(objectStoreName, {
        keyPath: "id",
        // autoIncrement: true
    });
}
// 创建索引
function createIndex(objectStore, indexName, keyPath, options) {
    return objectStore.createIndex(indexName, keyPath, options);
}
// 增删改查
function addRecord(objectStore, record) {
    return new Promise((resolve, reject) => {
        const request = objectStore.add(record);
        request.onsuccess = (event) => {
            //   console.log("记录添加成功", (event.target as IDBRequest).result);
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            //   console.log("记录添加失败", (event.target as IDBRequest).error);
            reject(event.target.error);
        };
    });
}
// 查询
function queryRecord(objectStore, key) {
    return new Promise((resolve, reject) => {
        const request = objectStore.get(key);
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}
function readAllRecord(objectStore) {
    return new Promise((resolve, reject) => {
        const request = objectStore.getAll();
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}
export {};
