---
title: 管道与重定向
description: Linux管道和输入/输出重定向详解
---

# 管道与重定向

## 管道 `|` — Linux 的灵魂

**符号**：`|`（竖线，pipe）

把前面命令的输出传给后面命令。

```text
命令A | 命令B
```

命令A 的输出 → 作为 → 命令B 的输入。

### 示例

```bash
ps aux | grep python
```

查看 Python 进程。

```text
ps aux  →  列出所有进程
   |
   ↓
grep python  →  过滤包含 python 的行
```

```bash
ss -tlnp | grep 8000
```

查 8000 端口。

```bash
docker ps | grep nginx
```

查 nginx 容器。

```bash
cat app.log | grep error | wc -l
```

统计日志中 error 出现的次数。

| 步骤 | 说明 |
|------|------|
| `cat app.log` | 输出日志内容 |
| `grep error` | 过滤包含 error 的行 |
| `wc -l` | 统计行数 |

```bash
ls -l | grep ".py"
```

查找当前目录下的 `.py` 文件。

```bash
history | grep "docker"
```

在命令历史中搜索包含 `docker` 的命令。

### 多级管道

```bash
cat access.log | grep "404" | awk '{print $1}' | sort | uniq -c | sort -rn
```

| 步骤 | 说明 |
|------|------|
| `cat access.log` | 输出日志 |
| `grep "404"` | 过滤 404 请求 |
| `awk '{print $1}'` | 提取第一列（IP地址） |
| `sort` | 排序 |
| `uniq -c` | 统计每个 IP 出现次数 |
| `sort -rn` | 按次数降序 |

---

## 输出重定向 `>` — 覆盖写入

**符号**：`>`

把命令输出写入文件（覆盖原有内容）。

### 示例

```bash
echo hello > a.txt
```

将 `hello` 写入 `a.txt`，覆盖原内容。

```bash
ls > files.txt
```

将目录列表写入文件。

```bash
ps aux > processes.txt
```

将进程列表保存到文件。

```bash
python app.py > output.log 2>&1
```

将标准输出和错误输出都写入文件。

---

## 追加输出 `>>` — 不覆盖

**符号**：`>>`

把命令输出追加到文件末尾（不覆盖）。

### 示例

```bash
echo hello >> a.txt
```

追加到文件末尾。

```bash
echo "new line" >> config.yaml
```

在配置文件末尾追加一行。

```bash
date >> log.txt
```

记录时间戳到日志文件。

---

## 错误重定向 `2>`

**符号**：`2>`

标准输出 = `1`，标准错误 = `2`。

### 示例

```bash
python app.py 2> error.log
```

将错误输出写入 `error.log`。

```bash
python app.py > output.log 2> error.log
```

| 输出 | 文件 |
|------|------|
| 标准输出 | `output.log` |
| 标准错误 | `error.log` |

```bash
python app.py > all.log 2>&1
```

标准输出和错误都写入同一个文件。

```bash
python app.py &> all.log
```

简写形式，效果同上。

---

## 输入重定向 `<`

**符号**：`<`

把文件内容作为命令的输入。

### 示例

```bash
python app.py < input.txt
```

将 `input.txt` 的内容作为程序输入。

```bash
mysql -u root -p mydb < backup.sql
```

将 SQL 文件导入数据库。

---

## /dev/null — 黑洞设备

丢弃不需要的输出。

```bash
python app.py > /dev/null
```

丢弃标准输出。

```bash
python app.py 2> /dev/null
```

丢弃错误输出。

```bash
python app.py > /dev/null 2>&1
```

丢弃所有输出（静默运行）。

---

## 常见组合

```bash
grep "error" app.log > errors.txt
```

搜索结果保存到文件。

```bash
ps aux | grep python | wc -l
```

统计 Python 进程数。

```bash
find . -name "*.py" | wc -l
```

统计 `.py` 文件数量。

```bash
docker ps | grep nginx | awk '{print $1}'
```

获取 nginx 容器的 ID。
