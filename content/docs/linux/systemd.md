---
title: Systemd服务
description: Linux Systemd服务管理：systemctl/journalctl详解
---

# Systemd 服务

Systemd 是 Linux 的初始化系统和服务管理器。

部署必会。

---

## systemctl — 服务管理

**全称**：system control（系统控制）

### 查看服务状态

```bash
systemctl status nginx
```

输出示例：

```text
● nginx.service - A high performance web server
     Active: active (running) since Mon 2024-06-10 10:00:00 UTC
   Main PID: 1234 (nginx)
      Tasks: 3
     Memory: 5.0M
```

| 状态 | 说明 |
|------|------|
| active (running) | 正在运行 |
| inactive (dead) | 已停止 |
| failed | 启动失败 |
| enabled | 开机启动 |
| disabled | 未设置开机启动 |

### 启动服务

```bash
systemctl start nginx
```

### 停止服务

```bash
systemctl stop nginx
```

### 重启服务

```bash
systemctl restart nginx
```

重新加载配置（不中断服务）：

```bash
systemctl reload nginx
```

| 命令 | 说明 |
|------|------|
| `restart` | 完全重启（会中断服务） |
| `reload` | 重新加载配置（不中断） |

### 开机启动

```bash
systemctl enable nginx
```

禁止开机启动：

```bash
systemctl disable nginx
```

### 查看所有服务

```bash
systemctl list-units --type=service
```

只查看运行中的服务：

```bash
systemctl list-units --type=service --state=running
```

### 查看失败的服务

```bash
systemctl --failed
```

---

## journalctl — 查看服务日志

**全称**：journal control（日志控制）

### 查看服务日志

```bash
journalctl -u nginx
```

| 参数 | 全称 | 说明 |
|------|------|------|
| `-u` | unit | 指定服务名 |
| `-f` | follow | 实时跟踪 |
| `-n` | lines | 显示最后 N 行 |
| `--since` | since | 从某时间开始 |
| `--until` | until | 到某时间 |

### 实时跟踪日志

```bash
journalctl -u nginx -f
```

类似 `tail -f`，实时查看服务日志。

### 查看最近日志

```bash
journalctl -u nginx -n 50
```

查看最后 50 行。

### 按时间查看

```bash
journalctl -u nginx --since "2024-06-10 10:00:00"
```

```bash
journalctl -u nginx --since today
```

```bash
journalctl -u nginx --since "1 hour ago"
```

### 查看系统日志

```bash
journalctl
```

```bash
journalctl -f
```

实时跟踪所有系统日志。

---

## 自定义 Systemd 服务

创建服务文件：

```bash
sudo vim /etc/systemd/system/myapp.service
```

服务文件模板（以 FastAPI 为例）：

```text
[Unit]
Description=My FastAPI Application
After=network.target

[Service]
Type=simple
User=sonike
WorkingDirectory=/home/sonike/project
ExecStart=/home/sonike/project/venv/bin/uvicorn main:app --host 0.0.0.0 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
```

| 字段 | 说明 |
|------|------|
| Description | 服务描述 |
| After | 启动依赖（在 network 之后） |
| Type | 服务类型（simple/forking） |
| User | 运行用户 |
| WorkingDirectory | 工作目录 |
| ExecStart | 启动命令 |
| Restart | 重启策略（always/on-failure） |
| WantedBy | 运行级别 |

### 启用并启动

```bash
# 重新加载 systemd 配置
sudo systemctl daemon-reload

# 启用并启动
sudo systemctl enable myapp
sudo systemctl start myapp

# 查看状态
systemctl status myapp

# 查看日志
journalctl -u myapp -f
```
