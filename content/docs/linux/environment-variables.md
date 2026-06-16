---
title: 环境变量
description: Linux环境变量：env/export/PATH详解
---

# 环境变量

## env — 查看所有环境变量

**全称**：environment（环境）

### 基本用法

```bash
env
```

输出示例：

```text
SHELL=/bin/bash
USER=sonike
HOME=/home/sonike
PATH=/usr/local/bin:/usr/bin:/bin
LANG=en_US.UTF-8
```

---

## echo — 读取单个环境变量

**全称**：echo（回声，输出）

### 基本用法

```bash
echo $PATH
```

输出：

```text
/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin
```

`$` 符号用于引用变量。

### 示例

```bash
echo $HOME
```

输出家目录路径：

```text
/home/sonike
```

```bash
echo $USER
```

输出当前用户名：

```text
sonike
```

```bash
echo $SHELL
```

输出当前 Shell：

```text
/bin/bash
```

---

## export — 设置环境变量

**全称**：export（导出）

### 基本用法

```bash
export API_KEY=123
```

设置环境变量 `API_KEY` 为 `123`。

### 示例

```bash
export DATABASE_URL=postgresql://localhost:5432/mydb
```

```bash
export DEBUG=true
```

```bash
export SECRET_KEY=my-secret-key-123
```

### 查看变量值

```bash
echo $API_KEY
```

输出：

```text
123
```

### 删除变量

```bash
unset API_KEY
```

---

## PATH — 命令搜索路径

**全称**：path（路径）

`PATH` 决定了系统在哪里查找可执行命令。

```bash
echo $PATH
```

输出：

```text
/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin
```

多个路径用 `:` 分隔。

### 添加路径到 PATH

```bash
export PATH=$PATH:/home/sonike/.local/bin
```

将 `~/.local/bin` 添加到 PATH 末尾。

### 永久设置环境变量

编辑 `~/.bashrc`（对当前用户永久生效）：

```bash
vim ~/.bashrc
```

在末尾添加：

```text
export API_KEY=123
export DATABASE_URL=postgresql://localhost:5432/mydb
export PATH=$PATH:/home/sonike/.local/bin
```

保存后立即生效：

```bash
source ~/.bashrc
```

| 文件 | 作用范围 |
|------|----------|
| `~/.bashrc` | 当前用户，每个新终端生效 |
| `~/.profile` | 当前用户，登录时生效 |
| `/etc/environment` | 所有用户，系统级 |

---

## 在程序中使用环境变量

### Python

```python
import os

api_key = os.getenv("API_KEY")
database_url = os.getenv("DATABASE_URL")
debug = os.getenv("DEBUG", "false")  # 默认值
```

### Shell 脚本

```bash
#!/bin/bash

echo "API Key: $API_KEY"
echo "Database: $DATABASE_URL"
```

---

## 常用环境变量

| 变量 | 说明 |
|------|------|
| `$HOME` | 当前用户家目录 |
| `$USER` | 当前用户名 |
| `$SHELL` | 当前 Shell |
| `$PATH` | 命令搜索路径 |
| `$PWD` | 当前工作目录 |
| `$LANG` | 语言/编码 |
| `$TERM` | 终端类型 |
