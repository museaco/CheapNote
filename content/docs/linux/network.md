---
title: 网络命令
description: Linux网络命令：ip/ping/curl/wget详解
---

# 网络命令

## ip — 查看网络接口

**全称**：ip（Internet Protocol）

### 查看 IP 地址

```bash
ip addr
```

简写：

```bash
ip a
```

输出示例：

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536
    inet 127.0.0.1/8 scope host lo
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0
```

| 字段 | 说明 |
|------|------|
| lo | 本地回环（127.0.0.1） |
| eth0 | 以太网接口 |
| inet | IPv4 地址 |

### 查看路由

```bash
ip route
```

简写：

```bash
ip r
```

---

## ping — 测试网络连通性

**全称**：Packet Internet Groper（互联网包探测仪）

### 基本用法

```bash
ping google.com
```

发送 ICMP 请求测试连通性。

### 常用参数

| 参数 | 说明 |
|------|------|
| `-c` | 发送次数（Linux） |
| `-t` | TTL 值 |
| `-s` | 数据包大小 |

### 示例

```bash
ping -c 4 google.com
```

发送 4 次 ping 请求。

```text
PING google.com (142.250.80.46) 56(84) bytes of data.
64 bytes from lga34s34-in-f14.1e100.net: icmp_seq=1 ttl=117 time=12.3 ms
64 bytes from lga34s34-in-f14.1e100.net: icmp_seq=2 ttl=117 time=11.8 ms
```

```bash
ping -c 3 192.168.1.1
```

测试与网关的连通性。

---

## curl — 发送 HTTP 请求

**全称**：Client URL（客户端 URL 工具）

### 基本用法

```bash
curl https://api.github.com
```

发送 GET 请求。

后端开发必会。

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-X` | request | 指定 HTTP 方法 |
| `-d` | data | 发送数据 |
| `-H` | header | 添加请求头 |
| `-o` | output | 输出到文件 |
| `-O` | remote-name | 以远程文件名保存 |
| `-s` | silent | 静默模式 |
| `-v` | verbose | 详细输出 |
| `-L` | location | 跟随重定向 |
| `-I` | head | 只显示响应头 |

### 示例

GET 请求：

```bash
curl https://api.github.com
```

POST 请求：

```bash
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d '{"name": "sonike", "age": 25}'
```

下载文件：

```bash
curl -o file.zip https://example.com/file.zip
```

查看响应头：

```bash
curl -I https://api.github.com
```

输出：

```text
HTTP/2 200
content-type: application/json; charset=utf-8
x-ratelimit-limit: 60
```

带认证请求：

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/data
```

静默下载：

```bash
curl -sO https://example.com/file.zip
```

---

## wget — 下载文件

**全称**：World Wide Web get（从 Web 获取）

### 基本用法

```bash
wget https://example.com/file.zip
```

下载文件到当前目录。

### 常用参数

| 参数 | 全称 | 说明 |
|------|------|------|
| `-O` | output-document | 指定输出文件名 |
| `-P` | directory-prefix | 指定下载目录 |
| `-c` | continue | 断点续传 |
| `-q` | quiet | 静默模式 |
| `-r` | recursive | 递归下载 |

### 示例

```bash
wget https://example.com/file.zip
```

下载文件。

```bash
wget -O myfile.zip https://example.com/file.zip
```

指定文件名。

```bash
wget -P /tmp https://example.com/file.zip
```

下载到 `/tmp` 目录。

```bash
wget -c https://example.com/large-file.zip
```

断点续传（下载中断后继续）。

### curl vs wget

| 特性 | curl | wget |
|------|------|------|
| 发送请求 | ✓ 强大 | ✗ 有限 |
| 下载文件 | ✓ | ✓ 更方便 |
| POST/PUT | ✓ | ✗ |
| API 调试 | ✓ | ✗ |
| 递归下载 | ✗ | ✓ |

简单规则：
- 调试 API → 用 `curl`
- 下载文件 → 用 `wget`
