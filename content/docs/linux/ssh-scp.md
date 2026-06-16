---
title: SSH远程连接
description: SSH/SCP远程连接与文件传输详解
---

# SSH 远程连接

## ssh — 远程登录

**全称**：Secure Shell（安全外壳）

### 基本用法

```bash
ssh 用户名@服务器IP
```

### 示例

```bash
ssh root@1.2.3.4
```

以 root 用户登录服务器 `1.2.3.4`。

```bash
ssh sonike@192.168.1.100
```

以 `sonike` 用户登录。

指定端口（默认 22）：

```bash
ssh -p 2222 root@1.2.3.4
```

| 参数 | 全称 | 说明 |
|------|------|------|
| `-p` | port | 指定端口 |
| `-i` | identity | 指定私钥文件 |
| `-v` | verbose | 详细输出（调试用） |

### 使用密钥登录

```bash
ssh -i ~/.ssh/my_key.pem root@1.2.3.4
```

使用指定私钥文件登录。

### SSH 配置（简化登录）

编辑 `~/.ssh/config`：

```text
Host myserver
    HostName 1.2.3.4
    User root
    Port 22
    IdentityFile ~/.ssh/my_key.pem
```

配置后直接：

```bash
ssh myserver
```

### 生成 SSH 密钥对

```bash
ssh-keygen -t ed25519
```

| 参数 | 说明 |
|------|------|
| `-t` | 密钥类型（推荐 ed25519 或 rsa） |

生成文件：

```text
~/.ssh/id_ed25519      # 私钥（不要分享给任何人）
~/.ssh/id_ed25519.pub  # 公钥（放到服务器上）
```

### 将公钥复制到服务器

```bash
ssh-copy-id root@1.2.3.4
```

自动将本地公钥添加到服务器的 `~/.ssh/authorized_keys`。

---

## scp — 远程文件传输

**全称**：Secure Copy（安全复制）

### 上传文件到服务器

```bash
scp 本地文件 用户名@服务器IP:远程路径
```

示例：

```bash
scp app.zip root@1.2.3.4:/root/
```

将本地 `app.zip` 上传到服务器的 `/root/` 目录。

```bash
scp config.yaml sonike@1.2.3.4:/home/sonike/project/
```

### 从服务器下载文件

```bash
scp 用户名@服务器IP:远程文件 本地路径
```

示例：

```bash
scp root@1.2.3.4:/root/app.zip .
```

从服务器下载 `app.zip` 到当前目录。

```bash
scp root@1.2.3.4:/var/log/app.log ./logs/
```

下载日志文件到本地 `logs/` 目录。

### 上传/下载目录

```bash
scp -r project/ root@1.2.3.4:/root/
```

| 参数 | 全称 | 说明 |
|------|------|------|
| `-r` | recursive | 递归传输目录 |
| `-P` | port | 指定端口（大写 P） |
| `-i` | identity | 指定私钥文件 |

递归上传整个目录。

```bash
scp -r root@1.2.3.4:/root/backup/ ./local-backup/
```

递归下载目录。

### 指定端口

```bash
scp -P 2222 app.zip root@1.2.3.4:/root/
```

### 使用密钥

```bash
scp -i ~/.ssh/my_key.pem app.zip root@1.2.3.4:/root/
```
