---
title: 搜索命令
description: Linux搜索命令：find/grep详解
---

# 搜索命令

## find — 查找文件

**全称**：find（查找）

### 基本用法

```bash
find 搜索路径 条件
```

### 常用参数

| 参数 | 说明 |
|------|------|
| `-name` | 按文件名查找（区分大小写） |
| `-iname` | 按文件名查找（不区分大小写） |
| `-type` | 按类型查找：`f` 文件，`d` 目录 |
| `-size` | 按大小查找：`+10M` 大于10MB，`-1k` 小于1KB |
| `-mtime` | 按修改时间查找：`-7` 7天内，`+30` 30天前 |
| `-maxdepth` | 最大搜索深度 |

### 示例

按文件名查找：

```bash
find . -name "*.py"
```

在当前目录及子目录查找所有 `.py` 文件。

```bash
find / -name nginx.conf
```

在整个系统中查找 `nginx.conf`。

按类型查找：

```bash
find . -type d -name "config"
```

查找名为 `config` 的目录。

```bash
find . -type f -name "*.log"
```

查找所有 `.log` 文件。

按大小查找：

```bash
find . -size +100M
```

查找大于 100MB 的文件。

按修改时间查找：

```bash
find . -mtime -7
```

查找 7 天内修改过的文件。

```bash
find /var/log -mtime +30
```

查找 30 天前的日志文件。

组合条件：

```bash
find . -name "*.py" -size +1k
```

查找大于 1KB 的 `.py` 文件。

查找并执行操作：

```bash
find . -name "*.tmp" -delete
```

查找所有 `.tmp` 文件并删除。

```bash
find . -name "*.log" -exec rm {} \;
```

查找所有 `.log` 文件并逐个删除。

---

## grep — 搜索文件内容

**全称**：global regular expression print（全局正则表达式打印）

### 基本用法

```bash
grep "关键词" 文件名
```

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-i` | ignore-case | 忽略大小写 |
| `-n` | line-number | 显示行号 |
| `-r` | recursive | 递归搜索目录 |
| `-v` | invert-match | 反向匹配（排除） |
| `-c` | count | 统计匹配行数 |
| `-l` | files-with-matches | 只显示包含匹配的文件名 |
| `-w` | word-regexp | 完整单词匹配 |

### 示例

搜索文件内容：

```bash
grep "error" app.log
```

在 `app.log` 中搜索 `error`。

忽略大小写：

```bash
grep -i error app.log
```

匹配 `error`、`Error`、`ERROR` 等。

显示行号：

```bash
grep -n "error" app.log
```

输出：

```text
23: error: connection timeout
45: error: file not found
```

递归搜索目录：

```bash
grep -r "def main" .
```

在当前目录及子目录搜索包含 `def main` 的文件。

```bash
grep -rn "TODO" src/
```

在 `src/` 目录递归搜索 `TODO`，并显示行号。

反向匹配（排除）：

```bash
grep -v "DEBUG" app.log
```

显示不包含 `DEBUG` 的行。

统计匹配行数：

```bash
grep -c "error" app.log
```

输出匹配的行数，例如 `15`。

只显示文件名：

```bash
grep -rl "import" .
```

列出所有包含 `import` 的文件。

### 组合使用

```bash
cat app.log | grep error
```

更推荐直接：

```bash
grep error app.log
```

```bash
ps aux | grep python
```

查找 Python 进程。

```bash
grep -rn "API_KEY" . --include="*.py"
```

在 `.py` 文件中递归搜索 `API_KEY`。
