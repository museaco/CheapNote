---
title: 进程管理
description: Linux进程管理：ps/top/htop/kill命令详解
---

# 进程管理

## ps — 查看进程

**全称**：process status（进程状态）

### 基本用法

```bash
ps
```

只显示当前终端的进程。

### 常用参数

| 参数 | 说明 |
|------|------|
| `aux` | 显示所有用户的所有进程（最常用） |
| `ef` | 显示所有进程（类似 aux） |

### 示例

```bash
ps aux
```

显示所有进程的详细信息：

```text
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1 169556 11840 ?        Ss   Jun09   0:05 /sbin/init
sonike    1234  0.5  2.1 500000 43000 ?        Sl   10:00   0:12 python3 app.py
```

| 字段 | 说明 |
|------|------|
| USER | 进程所有者 |
| PID | 进程 ID |
| %CPU | CPU 使用率 |
| %MEM | 内存使用率 |
| COMMAND | 执行的命令 |

查找特定进程：

```bash
ps aux | grep python
```

输出：

```text
sonike    1234  0.5  2.1 500000 43000 ?        Sl   10:00   0:12 python3 app.py
```

---

## top — 实时查看进程

**全称**：top（顶部，显示最活跃的进程）

### 基本用法

```bash
top
```

实时显示系统资源和进程。

### 操作键

| 按键 | 说明 |
|------|------|
| `q` | 退出 |
| `P` | 按 CPU 使用率排序 |
| `M` | 按内存使用率排序 |
| `k` | 杀死进程（输入 PID） |

---

## htop — 更好用的进程查看

**全称**：htop（h 是作者名字 Hisham 的首字母）

### 安装

```bash
sudo apt install htop
```

### 使用

```bash
htop
```

比 `top` 更直观，支持鼠标操作，彩色显示。

### 操作键

| 按键 | 说明 |
|------|------|
| `F5` | 树状视图 |
| `F9` | 杀死进程 |
| `F10` | 退出 |
| `/` | 搜索进程 |

---

## kill — 终止进程

**全称**：kill（杀死）

### 基本用法

```bash
kill PID
```

发送 SIGTERM 信号（优雅终止）。

### 常用信号

| 信号 | 编号 | 说明 |
|------|------|------|
| SIGTERM | 15 | 优雅终止（默认） |
| SIGKILL | 9 | 强制终止 |
| SIGHUP | 1 | 重新加载 |

### 示例

```bash
kill 1234
```

终止 PID 为 1234 的进程。

强制终止：

```bash
kill -9 1234
```

强制杀死进程（当普通 kill 无效时使用）。

```bash
kill -9 $(ps aux | grep python | grep -v grep | awk '{print $2}')
```

杀死所有 Python 进程。

---

## killall — 按名称终止进程

**全称**：kill all（杀死所有）

```bash
killall python3
```

杀死所有名为 `python3` 的进程。

```bash
killall nginx
```

杀死所有 Nginx 进程。

---

## pkill — 按模式终止进程

**全称**：process kill

```bash
pkill -f "python app.py"
```

杀死运行 `python app.py` 的进程。

| 参数 | 说明 |
|------|------|
| `-f` | 匹配完整命令行 |

---

## ss — 查看端口占用

**全称**：socket statistics（套接字统计）

### 常用参数

| 参数 | 说明 |
|------|------|
| `-t` | TCP 连接 |
| `-l` | 监听状态 |
| `-n` | 显示数字端口（不解析服务名） |
| `-p` | 显示进程信息 |

### 示例

```bash
ss -tlnp
```

查看所有监听的 TCP 端口及对应进程：

```text
State   Recv-Q  Send-Q  Local Address:Port  Peer Address:Port  Process
LISTEN  0       128     0.0.0.0:80          0.0.0.0:*          users:(("nginx",pid=1234,fd=6))
LISTEN  0       128     0.0.0.0:8000        0.0.0.0:*          users:(("python3",pid=5678,fd=3))
```

查找特定端口：

```bash
ss -tlnp | grep 8000
```

查看 8000 端口被谁占用。

```bash
ss -tlnp | grep 5432
```

查看 PostgreSQL 端口。

---

## netstat — 网络连接（旧版）

**全称**：network statistics

```bash
netstat -tlnp
```

功能与 `ss -tlnp` 类似，但 `ss` 更快更现代。
