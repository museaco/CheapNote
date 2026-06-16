---
title: 查看文件内容
description: Linux查看文件命令：cat/less/head/tail详解
---

# 查看文件内容

## cat — 查看文件全部内容

**全称**：concatenate（连接）

### 基本用法

```bash
cat app.py
```

显示 `app.py` 的全部内容。

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-n` | number | 显示行号 |
| `-b` | number-nonblank | 只对非空行编号 |

### 示例

```bash
cat app.py
```

输出文件全部内容。

```bash
cat -n app.py
```

带行号显示：

```text
     1  import os
     2
     3  def main():
     4      print("hello")
```

合并多个文件：

```bash
cat file1.txt file2.txt > combined.txt
```

---

## less — 分页查看

**全称**：less（比 `more` 命令更强大，所以叫 "less is more"）

### 基本用法

```bash
less log.txt
```

### 操作键

| 按键 | 说明 |
|------|------|
| `Space` / `f` | 向下翻页 |
| `b` | 向上翻页 |
| `Enter` / `j` | 向下滚动一行 |
| `k` | 向上滚动一行 |
| `g` | 跳到文件开头 |
| `G` | 跳到文件末尾 |
| `/keyword` | 向下搜索 |
| `?keyword` | 向上搜索 |
| `n` | 跳到下一个搜索结果 |
| `N` | 跳到上一个搜索结果 |
| `q` | 退出 |

### 示例

```bash
less /var/log/syslog
```

分页查看系统日志。

```bash
less app.py
```

分页查看代码文件。

> 退出按 `q`。

---

## head — 查看文件开头

**全称**：head（头部）

### 基本用法

```bash
head app.log
```

默认显示前 **10** 行。

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-n` | lines | 指定显示行数 |

### 示例

```bash
head app.log
```

显示前 10 行。

```bash
head -n 20 app.log
```

显示前 20 行。

```bash
head -5 app.py
```

简写，显示前 5 行。

```bash
head -1 config.yaml
```

只看第一行。

---

## tail — 查看文件末尾

**全称**：tail（尾部）

### 基本用法

```bash
tail app.log
```

默认显示后 **10** 行。

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-n` | lines | 指定显示行数 |
| `-f` | follow | 实时跟踪文件新增内容 |

### 示例

```bash
tail app.log
```

显示最后 10 行。

```bash
tail -n 50 app.log
```

显示最后 50 行。

实时查看日志（后端开发每天都在用）：

```bash
tail -f app.log
```

文件有新内容写入时，会自动滚动显示。

```bash
tail -f /var/log/nginx/access.log
```

实时查看 Nginx 访问日志。

```bash
tail -100f app.log
```

先显示最后 100 行，然后实时跟踪。

> 按 `Ctrl + C` 退出实时跟踪。
