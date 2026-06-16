---
title: 概要
description: Linux操作系统核心概念与入门指南
---

# Linux 基本

Linux 是一套开源的类 Unix 操作系统。

你可以把它理解为：

```text
Windows
├── 桌面
├── 文件管理器
├── 注册表
└── PowerShell

Linux
├── Shell (Bash)
├── 文件系统
├── 权限系统
└── 各种服务
```

## 为什么后端开发必须学 Linux

大部分服务器都没有桌面：

```bash
ssh root@server
```

登录后就是：

```bash
root@server:~#
```

没有图形界面，所有操作都通过命令行完成。

## 核心概念

Linux 的核心就是：

```text
文件
目录
权限
进程
网络
软件安装
```

## 文档导航

本系列文档涵盖 Linux 开发最常用的命令和操作：

| 文档                                    | 内容 |
|---------------------------------------|------|
| [目录与路径](./linux/directory-path)       | 目录结构、路径、ls、cd、mkdir |
| [文件操作](./linux/file-operations)       | touch、cp、mv、rm |
| [查看文件](./linux/file-viewing)          | cat、less、head、tail |
| [搜索命令](./linux/search)                | find、grep |
| [压缩解压](./linux/compression)           | tar、zip、unzip |
| [权限系统](./linux/permissions)           | chmod、用户管理、sudo |
| [软件安装](./linux/package-management)    | apt 包管理器 |
| [进程管理](./linux/process-management)    | ps、top、htop、kill |
| [网络命令](./linux/network)               | ip、ping、curl、wget、ss |
| [SSH远程连接](./linux/ssh-scp)            | ssh、scp |
| [Systemd服务](./linux/systemd)          | systemctl、journalctl |
| [环境变量](./linux/environment-variables) | env、export、PATH |
| [Vim基础](./linux/vim)                  | 文本编辑器 |
| [管道与重定向](./linux/pipes-redirect)      | \|、>、>>、2> |
| [Docker常用命令](./linux/docker)          | 容器操作 |
| [学习路线](./linux/learning-path)         | AI/Python开发者学习路线 |
