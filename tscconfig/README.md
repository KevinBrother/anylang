# tsconfig 的工程化配置

## 工程化

- 引入 node_modules 中的类型
- 扩展 window 对象
- paths 与 baseUrl 配合的重命名解析

## 构建

- 使用 tsc 构建
tsc 的生效逻辑是：

- 查找 tsconfig.json 文件， 如果当前目录下没有，则向上查找，可以通过 `-p` 参数指定
    如： `tsc -p ./tscconfig`
- 根据 tsconfig.json 中的配置进行构建
        ```json
        {
             <!-- 默认当前目录下的所有 ts 文件， 可以通过 include 指定 -->
            "include": ["src/**/*.ts"],
            "compilerOptions": {
                "outDir": "./dist",
                "target": "es2016",
                "declaration": true
            }
        }
        ```

## debug

### 使用 ts-node + vscode

- 不要使用 ems 调试 ts + node 的程序，
- tsconfig.json 中配置 `"module": "CommonJS"`, `"esModuleInterop": true`, 在ts中让 esm 更可以更方便导入 cjs 的模块（default 模块， 不然需要 `import * as xx from 'xx'`）

```json
{
    "compilerOptions": {
        "module": "CommonJS",
        "esModuleInterop": true
    }
}
``` json
{
    "type": "node",
    "request": "launch",
    "name": "debug/index.ts",
    "runtimeExecutable": "ts-node", // 必须
    // "runtimeArgs": ["--transpile-only"], 
    // "skipFiles": ["<node_internals>/**", "node_modules/**"],
    // "cwd": "${workspaceFolder}/tscconfig",
    "program": "${workspaceFolder}/tscconfig/src/debug/index.ts"
}
```
