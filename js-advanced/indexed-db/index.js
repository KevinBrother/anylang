"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idb_keyval_1 = require("idb-keyval");
// store 和 table 是同一个概念
var kssStore = (0, idb_keyval_1.createStore)("kss-db", "kss-store");
// 增删改查
// 添加
(0, idb_keyval_1.set)("kss-obj", { name: "obj1", id: 1, age: 18 }, kssStore);
(0, idb_keyval_1.set)("kss-obj", { name: "obj1", id: 2, age: 18 }, kssStore);
// 修改
// update("kss-obj", (value) => ({ ...value, name: "obj3" }), kssStore);
// 删除
// del("kss-obj", kssStore);
// 查询
(0, idb_keyval_1.get)("kss-obj", kssStore)
    .then(function (value) {
    console.log("value", value);
})
    .catch(function (error) {
    console.log("error", error);
});
