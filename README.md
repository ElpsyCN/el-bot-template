# el-bot-template

![GitHub package.json version](https://img.shields.io/github/package-json/v/ElpsyCN/el-bot-template)

本仓库为包含 [mirai](https://github.com/mamoe/mirai) 与 [el-bot](https://github.com/ElpsyCN/el-bot) 的基础可运行模版。
并提供了一些辅助脚本。

你需要确保你已拥有 [Java](https://www.java.com/zh_CN/) 与 [Node.js](https://nodejs.org/zh-cn/download/) 环境。

## 项目结构

```txt
.
├── LICENSE
├── README.md
├── bot  // 机器人实体，你可以自由编写代码扩展它
├── el  // 配置目录，存放机器人相关的配置（可自行解析 yml 文件）
├── mirai  // mirai 本体，你也可以删除它，使用在其他地方启动的 mirai
├── nodemon.json  // 监听文件变动，自动重启（譬如修改配置时，非常方便）
├── package.json
└── scripts
```

## 使用

### 克隆本模版

```sh
git clone https://github.com/ElpsyCN/el-bot-template
```

### 安装依赖

```sh
npm install
```


### 安装 mirai

```sh
npm install:mirai
```

### 启动 mirai

```sh
npm run start:mirai
```

### 启动 bot

```sh
npm run start:bot
# yarn run start:bot
# yarn bot
```

### 同时启动 mirai 和 bot

```sh
npm run start
# yarn start
```

### Webhook

```sh
npm run webhook
# yarn webhook
```
