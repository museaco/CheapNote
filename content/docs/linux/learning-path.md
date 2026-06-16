---
title: 学习路线
description: AI/Python开发者的Linux学习路线
---

# Linux 学习路线

AI/Python 开发者建议按这个顺序学习：

## 第一阶段 — 文件基础

```text
✓ 文件系统概念
✓ ls — 列出目录
✓ cd — 切换目录
✓ mkdir — 创建目录
✓ rm — 删除
✓ cp — 复制
✓ mv — 移动/重命名
✓ touch — 创建文件
✓ pwd — 当前目录
```

## 第二阶段 — 搜索与权限

```text
✓ grep — 搜索内容
✓ find — 查找文件
✓ tail -f — 实时日志
✓ chmod — 修改权限
✓ ssh — 远程连接
```

## 第三阶段 — 系统管理

```text
✓ ps — 查看进程
✓ top / htop — 实时监控
✓ systemctl — 服务管理
✓ journalctl — 服务日志
✓ curl — HTTP 请求
```

## 第四阶段 — 部署运维

```text
✓ Docker — 容器化
✓ Nginx — 反向代理
✓ Linux 部署
```

## 第五阶段 — 进阶

```text
✓ Shell 脚本
✓ Crontab — 定时任务
✓ Systemd 服务
✓ 网络排查
```

---

## 学完这些你能做什么

学完上面这些，你已经能完成：

- FastAPI 部署
- Docker 部署
- Nginx 反向代理
- PostgreSQL 运维
- MinIO 部署
- AI 服务部署（Qwen、Whisper、Ollama 等）

基本覆盖 **80%～90%** 的后端开发 Linux 场景。

---

## 快速参考

| 场景 | 命令 |
|------|------|
| 查日志 | `tail -f app.log` |
| 查端口 | `ss -tlnp \| grep 8000` |
| 查进程 | `ps aux \| grep python` |
| 查容器 | `docker ps` |
| 重启服务 | `systemctl restart nginx` |
| 上传文件 | `scp file root@ip:/path` |
| 测试接口 | `curl http://localhost:8000/api` |
| 搜索代码 | `grep -rn "keyword" .` |
