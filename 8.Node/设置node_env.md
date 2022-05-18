# 设置 node_env

## 一、windows

### （一）当我们使用 powershell 启动 node 的时候 需要使用

```
$env:NODE_ENV="production" ; node ./index.js
```

### （二）如果使用 CMD 启动 node 的时候 需要使用。（包含 package 命令启动）

```
set NODE_ENV=production ; node ./index.js
```

## 二、MAC

```
export NODE_ENV=production && node ./index.js
```
