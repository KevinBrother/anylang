# indexedDB

## code

``` bash
tsc --watch index.ts
```

## 概念

- 数据库：database
  - 每个（ 协议 + 域名 + 端口） 可以创建任意多个数据库
- 对象仓库：object store
  - 每个数据库可以创建多个对象仓库，类似关系型数据库的表
- 数据记录：record
  - 类似关系型数据库的行
- 索引：index
  - 每个对象仓库可以创建多个索引

## 打开数据库

```js
let openRequest = indexedDB.open(name, version);
```

## 增删改查

- 增

```js
let addRequest = db.addRequest(objectStoreName, value);
```

- 删

```js
let deleteRequest = db.deleteRequest(objectStoreName, key);
```

- 改

```js
let updateRequest = db.updateRequest(objectStoreName, value);
```

- 查

```js
let getRequest = db.getRequest(objectStoreName, key);
```

## 事务

```js
let transaction = db.transaction([objectStoreName], mode);
```
