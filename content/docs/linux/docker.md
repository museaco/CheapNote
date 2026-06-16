---
title: Docker常用命令
description: Docker开发最常用命令详解
---

# Docker 常用命令

## docker ps — 查看运行中的容器

**全称**：process status（进程状态）

### 基本用法

```bash
docker ps
```

查看所有正在运行的容器。

### 查看所有容器（包括已停止的）

```bash
docker ps -a
```

| 参数 | 全称 | 说明 |
|------|------|------|
| `-a` | all | 显示所有容器 |
| `-q` | quiet | 只显示容器 ID |

### 输出字段

```text
CONTAINER ID   IMAGE     COMMAND    CREATED        STATUS        PORTS                  NAMES
abc123def456   nginx     "nginx…"   2 hours ago    Up 2 hours    0.0.0.0:80->80/tcp     my-nginx
```

| 字段 | 说明 |
|------|------|
| CONTAINER ID | 容器 ID |
| IMAGE | 使用的镜像 |
| STATUS | 运行状态 |
| PORTS | 端口映射 |
| NAMES | 容器名称 |

---

## docker logs — 查看容器日志

**全称**：logs（日志）

### 基本用法

```bash
docker logs 容器名
```

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-f` | follow | 实时跟踪日志 |
| `-n` | tail | 显示最后 N 行 |
| `--since` | since | 从某时间开始 |

### 示例

```bash
docker logs -f my-app
```

实时跟踪容器 `my-app` 的日志。

```bash
docker logs -n 100 my-app
```

查看最后 100 行日志。

```bash
docker logs --since 1h my-app
```

查看最近 1 小时的日志。

---

## docker exec — 进入容器

**全称**：execute（执行）

### 基本用法

```bash
docker exec -it 容器名 bash
```

| 参数 | 全称 | 说明 |
|------|------|------|
| `-i` | interactive | 交互模式 |
| `-t` | tty | 分配终端 |

### 示例

```bash
docker exec -it my-app bash
```

进入容器的 bash 终端。

```bash
docker exec -it my-app sh
```

如果容器没有 bash，使用 sh。

进入容器后：

```bash
ls
cat /etc/os-release
python --version
exit    # 退出容器
```

在容器中执行单条命令：

```bash
docker exec my-app python manage.py migrate
```

---

## docker stop — 停止容器

**全称**：stop（停止）

```bash
docker stop 容器名
```

### 示例

```bash
docker stop my-app
```

停止容器 `my-app`。

```bash
docker stop $(docker ps -q)
```

停止所有运行中的容器。

---

## docker start — 启动容器

```bash
docker start 容器名
```

### 示例

```bash
docker start my-app
```

启动已停止的容器。

---

## docker rm — 删除容器

**全称**：remove（移除）

```bash
docker rm 容器名
```

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-f` | force | 强制删除（包括运行中的） |

### 示例

```bash
docker rm my-app
```

删除已停止的容器。

```bash
docker rm -f my-app
```

强制删除运行中的容器。

```bash
docker rm $(docker ps -aq)
```

删除所有已停止的容器。

---

## docker run — 创建并运行容器

**全称**：run（运行）

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-d` | detach | 后台运行 |
| `-p` | publish | 端口映射（宿主机:容器） |
| `-v` | volume | 挂载卷（宿主机:容器） |
| `--name` | name | 容器名称 |
| `-e` | env | 环境变量 |
| `--restart` | restart | 重启策略 |

### 示例

```bash
docker run -d -p 80:80 --name my-nginx nginx
```

| 参数 | 说明 |
|------|------|
| `-d` | 后台运行 |
| `-p 80:80` | 宿主机80端口映射到容器80端口 |
| `--name my-nginx` | 容器名为 my-nginx |
| `nginx` | 使用 nginx 镜像 |

带挂载卷：

```bash
docker run -d -p 3000:3000 -v ./data:/app/data --name my-app my-image
```

带环境变量：

```bash
docker run -d -e DATABASE_URL=postgresql://localhost/db --name my-app my-image
```

自动重启：

```bash
docker run -d --restart always --name my-app my-image
```

---

## docker images — 查看镜像

```bash
docker images
```

### 删除镜像

```bash
docker rmi 镜像名
```

---

## docker build — 构建镜像

**全称**：build（构建）

```bash
docker build -t my-app:latest .
```

| 参数 | 说明 |
|------|------|
| `-t` | 镜像名:标签 |
| `.` | Dockerfile 所在目录 |

---

## docker compose — 多容器编排

```bash
docker compose up -d
```

启动所有服务。

```bash
docker compose down
```

停止并删除所有服务。

```bash
docker compose logs -f
```

查看所有服务的日志。

---

## 常用组合

```bash
# 查看运行中的容器
docker ps

# 查看日志
docker logs -f my-app

# 进入容器
docker exec -it my-app bash

# 重启容器
docker stop my-app && docker start my-app

# 删除并重建
docker stop my-app && docker rm my-app
docker run -d -p 8000:8000 --name my-app my-image
```
