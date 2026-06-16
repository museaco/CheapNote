---
title: 压缩解压
description: Linux压缩解压命令：tar/zip/unzip详解
---

# 压缩解压

## tar — 打包/压缩/解压

**全称**：tape archive（磁带归档）

Linux 最常见的压缩格式：

```text
.tar.gz    # tar + gzip 压缩
.tar       # 仅打包，不压缩
.tar.bz2   # tar + bzip2 压缩
```

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-c` | create | 创建新的归档 |
| `-x` | extract | 解压/提取归档 |
| `-z` | gzip | 使用 gzip 压缩/解压 |
| `-j` | bzip2 | 使用 bzip2 压缩/解压 |
| `-v` | verbose | 显示过程 |
| `-f` | file | 指定归档文件名（必须放在最后） |
| `-t` | list | 列出归档内容 |

### 压缩

```bash
tar -czvf app.tar.gz app/
```

| 参数 | 说明 |
|------|------|
| `-c` | 创建归档 |
| `-z` | 使用 gzip 压缩 |
| `-v` | 显示过程 |
| `-f` | 指定文件名 `app.tar.gz` |

将 `app/` 目录压缩为 `app.tar.gz`。

### 解压

```bash
tar -xzvf app.tar.gz
```

| 参数 | 说明 |
|------|------|
| `-x` | 解压 |
| `-z` | 使用 gzip 解压 |
| `-v` | 显示过程 |
| `-f` | 指定文件名 `app.tar.gz` |

解压到指定目录：

```bash
tar -xzvf app.tar.gz -C /home/sonike/project/
```

`-C` 指定解压目标目录。

### 仅打包（不压缩）

```bash
tar -cvf app.tar app/
```

### 解包

```bash
tar -xvf app.tar
```

### 查看归档内容

```bash
tar -tvf app.tar.gz
```

列出归档中的文件，不解压。

---

## zip / unzip — ZIP 格式压缩解压

**全称**：zip（拉链，形象比喻）

### 压缩

```bash
zip -r app.zip app
```

| 参数 | 说明 |
|------|------|
| `-r` | 递归，包含子目录 |

将 `app` 目录压缩为 `app.zip`。

压缩多个文件：

```bash
zip files.zip file1.txt file2.txt file3.txt
```

### 解压

```bash
unzip app.zip
```

解压到指定目录：

```bash
unzip app.zip -d /home/sonike/project/
```

| 参数 | 说明 |
|------|------|
| `-d` | 指定解压目标目录 |

查看 zip 内容（不解压）：

```bash
unzip -l app.zip
```

### 常用示例

```bash
zip -r backup.zip /home/sonike/project/
```

备份整个项目目录。

```bash
unzip backup.zip -d /tmp/restore/
```

解压到临时目录。
