# across-import

## import 'xxx.cjs'

当 导入的是 cjs 时需要 文件名 为cjs 或者 package.json 的 type 为 `package.json`, 让 node 知道目标为 cjs。

## require_esm

[Node 22](https://nodejs.org/en/blog/announcements/v22-release-announce#support-requireing-synchronous-esm-graphs)

## ts-import_require

``` ts
// https://www.typescriptlang.org/docs/handbook/2/modules.html#es-module-syntax-with-commonjs-behavior
// tsconfig.json 中 "allowJs": true,
import x = require('./xxx.cjs') // it's ok in ts!
import x from './xxx.cjs' // it's ok in ts!
```
