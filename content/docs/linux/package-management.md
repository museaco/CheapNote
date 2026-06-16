---
title: 软件安装
description: Linux软件安装：apt包管理器详解
---

# 软件安装

## apt — 包管理器

**全称**：Advanced Package Tool（高级打包工具）

Ubuntu/Debian 系统的软件包管理器。

---

## apt update — 更新软件索引

```bash
sudo apt update
```

从软件源更新可用软件包列表。

**不是升级软件**，只是更新软件列表。

---

## apt upgrade — 升级软件

```bash
sudo apt upgrade
```

升级所有已安装的软件到最新版本。

自动确认：

```bash
sudo apt upgrade -y
```

| 参数 | 全称 | 说明 |
|------|------|------|
| `-y` | yes | 自动确认所有提示 |

---

## apt install — 安装软件

```bash
sudo apt install nginx
```

安装 Nginx。

安装多个软件：

```bash
sudo apt install nginx git curl
```

自动确认：

```bash
sudo apt install -y python3
```

---

## apt remove — 卸载软件

```bash
sudo apt remove nginx
```

卸载 Nginx（保留配置文件）。

完全卸载（包括配置文件）：

```bash
sudo apt purge nginx
```

| 命令 | 说明 |
|------|------|
| `remove` | 卸载软件，保留配置 |
| `purge` | 卸载软件并删除配置 |

---

## apt autoremove — 清理依赖

```bash
sudo apt autoremove
```

删除不再需要的依赖包。

---

## apt search — 搜索软件

```bash
apt search nginx
```

搜索包含 `nginx` 的软件包。

---

## apt show — 查看软件信息

```bash
apt show nginx
```

显示 `nginx` 包的详细信息。

---

## 常用软件安装示例

```bash
# Web 服务器
sudo apt install nginx

# 版本控制
sudo apt install git

# 网络工具
sudo apt install curl wget

# 编译工具
sudo apt install build-essential

# Python
sudo apt install python3 python3-pip python3-venv

# 数据库客户端
sudo apt install postgresql-client

# 进程管理
sudo apt install htop
```

---

## dpkg — 安装本地 .deb 包

**全称**：Debian package

```bash
sudo dpkg -i package.deb
```

| 参数 | 说明 |
|------|------|
| `-i` | 安装包 (install) |

如果缺少依赖：

```bash
sudo apt --fix-broken install
```

---

## snap — 通用包管理器

```bash
sudo snap install code --classic
```

安装 VS Code。

```bash
snap list
```

查看已安装的 snap 包。
