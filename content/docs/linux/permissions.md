---
title: 权限系统
description: Linux权限系统：chmod/用户管理/sudo详解
---

# 权限系统

## 查看权限

```bash
ls -l
```

输出示例：

```text
-rwxr-xr-x 1 sonike sonike 1234 Jun 10 14:30 app.sh
```

### 权限字符串解析

```text
-rwxr-xr-x
│├─┤├─┤├─┤
│ │   │   └── 其他用户 (others)
│ │   └────── 所属组 (group)
│ └────────── 文件所有者 (owner)
└──────────── 文件类型 (- 普通文件, d 目录)
```

每个字符的含义：

```text
r = read   (读)    = 4
w = write  (写)    = 2
x = execute(执行)  = 1
- = 无权限         = 0
```

### 权限数字表示法

```text
rwx = 4 + 2 + 1 = 7
r-x = 4 + 0 + 1 = 5
r-- = 4 + 0 + 0 = 4
rw- = 4 + 2 + 0 = 6
```

---

## chmod — 修改权限

**全称**：change mode

### 符号方式

```bash
chmod +x app.sh
```

给文件添加执行权限。

| 操作 | 说明 |
|------|------|
| `+` | 添加权限 |
| `-` | 移除权限 |
| `=` | 设置权限 |

| 用户 | 说明 |
|------|------|
| `u` | 所有者 (user) |
| `g` | 所属组 (group) |
| `o` | 其他用户 (others) |
| `a` | 所有用户 (all) |

示例：

```bash
chmod +x app.sh          # 所有人添加执行权限

chmod u+x app.sh         # 只给所有者添加执行权限

chmod u+w,g-w app.sh     # 所有者加写权限，组去掉写权限

chmod a+r file.txt       # 所有人添加读权限

chmod -w others.txt      # 移除所有人的写权限
```

### 数字方式（推荐）

```bash
chmod 755 app.sh
```

| 数字 | 含义 |
|------|------|
| `7` | rwx (所有者) |
| `5` | r-x (所属组) |
| `5` | r-x (其他用户) |

### 常见权限组合

| 权限 | 数字 | 用途 |
|------|------|------|
| `rwxr-xr-x` | 755 | 脚本、可执行文件 |
| `rw-r--r--` | 644 | 普通配置文件 |
| `rw-------` | 600 | 敏感文件（如密钥） |
| `rwxrwxrwx` | 777 | 所有人可读写执行（不推荐） |

示例：

```bash
chmod 755 app.sh
```

脚本可执行：

```bash
./app.sh
```

```bash
chmod 644 config.yaml
```

普通配置文件权限。

```bash
chmod 600 ~/.ssh/id_rsa
```

SSH 私钥权限（必须只有所有者可读写）。

### 递归修改

```bash
chmod -R 755 project/
```

递归修改目录下所有文件和子目录的权限。

---

## chown — 修改文件所有者

**全称**：change owner

### 基本用法

```bash
chown 用户:组 文件
```

### 示例

```bash
chown sonike:sonike app.py
```

将文件所有者和组都改为 `sonike`。

```bash
chown -R www-data:www-data /var/www/
```

递归修改 Web 目录的所有者。

---

# 用户管理

## whoami — 当前用户

**全称**：who am I

```bash
whoami
```

输出：

```text
sonike
```

---

## sudo — 以管理员身份执行

**全称**：super user do（超级用户执行）

```bash
sudo apt update
```

以 root 权限执行 `apt update`。

```bash
sudo systemctl restart nginx
```

以 root 权限重启 Nginx。

---

## sudo -i — 切换到 root

```bash
sudo -i
```

切换到 root 用户。

退出：

```bash
exit
```

---

## su — 切换用户

**全称**：switch user

```bash
su - sonike
```

切换到 `sonike` 用户。

```bash
su -
```

切换到 root 用户（需要密码）。

---

## id — 查看用户信息

```bash
id sonike
```

输出：

```text
uid=1000(sonike) gid=1000(sonike) groups=1000(sonike),27(sudo)
```

| 字段 | 说明 |
|------|------|
| uid | 用户 ID |
| gid | 组 ID |
| groups | 所属组 |
