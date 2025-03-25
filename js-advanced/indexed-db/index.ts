import {
  createStore,
  entries,
  del,
  getMany,
  set,
  get,
  keys,
  update,
} from "idb-keyval";
// store 和 table 是同一个概念
const kssStore = createStore("kss-db", "kss-store");

// 增删改查

// 添加
set("1", { name: "obj1", id: 1, age: 18 }, kssStore);
set("2", { name: "obj1", id: 2, age: 18 }, kssStore);

// 修改
// update("kss-obj", (value) => ({ ...value, name: "obj3" }), kssStore);

// 删除
// del("kss-obj", kssStore);

// 查询
get("kss-obj", kssStore)
  .then((value) => {
    console.log("value", value);
  })
  .catch((error) => {
    console.log("error", error);
  });

keys(kssStore).then((keys) => {
  console.log("keys", keys);
});

entries(kssStore).then((entries) => {
  console.log("entries", entries);
});
