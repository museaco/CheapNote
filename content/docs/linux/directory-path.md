---
title: 目录与路径
description: Linux目录结构、路径概念、ls/cd/mkdir命令详解
---

# 目录与路径

## 目录结构（必须记住）

查看根目录：

```bash
ls /
```

常见目录：

```text
/
├── bin        # 基本命令 (binary)
├── etc        # 配置文件 (etcetera)
├── home       # 普通用户家目录
├── root       # root用户家目录
├── var        # 可变数据 (variable)
├── tmp        # 临时文件 (temporary)
├── usr        # 用户程序 (user)
└── opt        # 可选软件 (optional)
```

---

## /home — 用户目录

普通用户的家目录：

```text
/home/sonike
```

类似 Windows 的：

```text
C:\Users\sonike
```

---

## /root — root用户家目录

```bash
cd /root
```

root 用户的家目录不在 `/home/root`，而是 `/root`。

---

## /etc — 配置文件

存放系统和服务的配置文件：

```bash
/etc/nginx      # Nginx 配置
/etc/ssh        # SSH 配置
/etc/systemd    # Systemd 服务配置
```

---

## /var — 日志与可变数据

```bash
/var/log         # 系统日志目录
```

查看日志：

```bash
tail -f /var/log/syslog
```

---

## /tmp — 临时文件

```bash
/tmp
```

重启后可能清空。

---

# 路径概念

## pwd — 显示当前目录

**全称**：print working directory

```bash
pwd
```

例如：

```bash
/home/sonike
```

---

## 绝对路径

从根目录 `/` 开始：

```bash
/home/sonike/test.txt
```

---

## 相对路径

从当前目录开始：

```bash
./test.txt
```

---

## 特殊符号

| 符号 | 含义 |
|------|------|
| `.` | 当前目录 |
| `..` | 上级目录 |
| `~` | 家目录 |

例如：

```bash
cd ~      # 回到家目录

cd ..     # 回到上级目录

cd .      # 留在当前目录（无实际效果）
```

---

# ls — 列出目录内容

**全称**：list

## 基本用法

```bash
ls
```

## 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-l` | long | 显示详细信息（权限、大小、时间） |
| `-a` | all | 显示隐藏文件（以 `.` 开头的文件） |
| `-la` | long + all | 最常用，显示所有文件的详细信息 |
| `-h` | human-readable | 文件大小以 KB/MB/GB 显示 |
| `-t` | time | 按修改时间排序 |
| `-r` | reverse | 反向排序 |

## 示例

```bash
ls -l
```

输出：

```text
-rw-r--r-- 1 sonike sonike  1234 Jun 10 14:30 app.py
drwxr-xr-x 2 sonike sonike  4096 Jun 10 14:30 config
```

```bash
ls -la
```

显示所有文件，包括隐藏文件：

```text
drwxr-xr-x 3 sonike sonike 4096 Jun 10 14:30 .
drwxr-xr-x 5 root   root   4096 Jun 10 14:00 ..
-rw-r--r-- 1 sonike sonike  100 Jun 10 14:30 .env
-rw-r--r-- 1 sonike sonike 1234 Jun 10 14:30 app.py
```

```bash
ls -lh
```

文件大小以人类可读格式显示：

```text
-rw-r--r-- 1 sonike sonike 1.2K Jun 10 14:30 app.py
-rw-r--r-- 1 sonike sonike  50M Jun 10 14:30 data.zip
```

```bash
ls -lt
```

按修改时间排序（最新的在前面）：

```text
-rw-r--r-- 1 sonike sonike 1234 Jun 10 14:30 app.py
-rw-r--r-- 1 sonike sonike  567 Jun  9 10:00 old.py
```

这是最常用命令之一。

---

# cd — 切换目录

**全称**：change directory

## 基本用法

```bash
cd /home        # 进入绝对路径

cd ~/project    # 进入家目录下的 project

cd ..           # 回到上级目录

cd -            # 回到上一个目录
```

## 示例

```bash
cd /etc/nginx
```

进入 nginx 配置目录。

```bash
cd ~
```

回到家目录。

```bash
cd ..
```

回到上级目录。

```bash
cd -
```

切换到刚才所在的目录。

---

# mkdir — 创建目录

**全称**：make directory

## 基本用法

```bash
mkdir demo
```

创建名为 `demo` 的目录。

## 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-p` | parents | 递归创建，父目录不存在时自动创建 |
| `-v` | verbose | 显示创建过程 |

## 示例

```bash
mkdir project
```

创建 `project` 目录。

```bash
mkdir -p a/b/c
```

递归创建多层目录，等价于：

```bash
mkdir a
mkdir a/b
mkdir a/b/c
```

```bash
mkdir -p ~/project/src/tests
```

一次性创建项目目录结构。
