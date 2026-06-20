---
title: MCP
description: 实用MCP
---

Claude 添加MCP 是根据项目路径加的 

比如打开了 C:\Users\User\Desktop> 命令行，`claude mcp add ...`就只会加到这个路径中

## Github MCP

### 使用二进制文件

下载 [发布版二进制文件](https://github.com/github/github-mcp-server/releases)

解压，将其添加到  PATH 环境变量中

运行：


```bash
claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN="" -- github-mcp-server stdio
```

环境变量 windows

```bash
claude mcp add github -e GITHUB_PERSONAL_ACCESS_TOKEN=$env:GITHUB_PAT -- github-mcp-server stdio
```


重启 Claude Code

运行 claude mcp list 以查看 GitHub 服务器是否已成功配置


```json
{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "github-mcp-server",
      "args": [
        "stdio"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_pat_..."
      }
    }
  }
}

```


## playwright MCP


```bash
claude mcp add playwright npx @playwright/mcp@latest
```

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ],
      "env": {}
    }
  }
}

```
