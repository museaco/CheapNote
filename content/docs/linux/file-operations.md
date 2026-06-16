---
title: 文件操作
description: Linux文件操作命令：touch/cp/mv/rm详解
---

# 文件操作

## touch — 创建空文件

**全称**：touch（触碰，即"碰一下"创建一个文件）

### 基本用法

```bash
touch app.py
```

创建空文件 `app.py`。

### 示例

```bash
touch index.html
```

创建 `index.html`。

```bash
touch main.py utils.py config.py
```

一次创建多个文件。

```bash
touch /tmp/test.txt
```

在指定路径创建文件。

> touch 还可以修改文件的时间戳（不修改内容）：
> ```bash
> touch existing_file.txt    # 更新文件的修改时间
> ```

---

## cp — 复制文件/目录

**全称**：copy

### 基本用法

```bash
cp 源文件 目标文件
```

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-r` | recursive | 递归复制（用于目录） |
| `-i` | interactive | 覆盖前提示确认 |
| `-v` | verbose | 显示复制过程 |
| `-a` | archive | 保留所有属性（权限、时间等） |

### 示例

复制文件：

```bash
cp a.txt b.txt
```

将 `a.txt` 复制为 `b.txt`。

复制目录：

```bash
cp -r dir1 dir2
```

将 `dir1` 目录复制为 `dir2`。

复制到指定目录：

```bash
cp app.py /home/sonike/project/
```

将 `app.py` 复制到 `/home/sonike/project/` 目录。

保留所有属性复制：

```bash
cp -a project/ backup/
```

完整备份目录，保留权限、时间戳等。

复制时显示过程：

```bash
cp -rv src/ dest/
```

---

## mv — 移动/重命名

**全称**：move

### 基本用法

```bash
mv 源文件 目标文件
```

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-i` | interactive | 覆盖前提示确认 |
| `-v` | verbose | 显示移动过程 |
| `-n` | no-clobber | 不覆盖已存在的文件 |

### 示例

重命名文件：

```bash
mv a.txt test.txt
```

将 `a.txt` 重命名为 `test.txt`。

移动文件到目录：

```bash
mv a.txt /tmp/
```

将 `a.txt` 移动到 `/tmp/` 目录。

移动目录：

```bash
mv project/ /home/sonike/workspace/
```

重命名目录：

```bash
mv old-name new-name
```

移动多个文件到目录：

```bash
mv *.py /home/sonike/project/src/
```

将所有 `.py` 文件移动到 `src/` 目录。

---

## rm — 删除

**全称**：remove

### 基本用法

```bash
rm 文件名
```

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-r` | recursive | 递归删除（用于目录） |
| `-f` | force | 强制删除，不提示确认 |
| `-i` | interactive | 每次删除前提示确认 |
| `-v` | verbose | 显示删除过程 |

### 示例

删除文件：

```bash
rm a.txt
```

删除目录：

```bash
rm -r test
```

强制删除（不提示确认）：

```bash
rm -rf test
```

删除多个文件：

```bash
rm file1.txt file2.txt file3.txt
```

### ⚠️ 最危险命令之一

```bash
rm -rf /
```

**千万别执行。** 这会删除整个文件系统。

### 安全提示

```bash
rm -i important_file.txt
```

使用 `-i` 参数，删除前会提示确认：

```text
rm: remove regular file 'important_file.txt'? y
```
