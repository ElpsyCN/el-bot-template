# el-bot-template

![GitHub package.json version](https://img.shields.io/github/package-json/v/ElpsyCN/el-bot-template)
[![QQ Group](https://img.shields.io/badge/qq%20group-707408530-12B7F5)](https://shang.qq.com/wpa/qunwpa?idkey=5b0eef3e3256ce23981f3b0aa2457175c66ca9194efd266fd0e9a7dbe43ed653)
[![telegram](https://img.shields.io/badge/telegram-elpsy__cn-blue)](https://t.me/elpsy_cn)
[![docs](https://github.com/ElpsyCN/el-bot-docs/workflows/docs/badge.svg)](https://docs.bot.elpsy.cn)

本仓库为包含 [mirai](https://github.com/mamoe/mirai) 与 [el-bot](https://github.com/ElpsyCN/el-bot) 的基础可运行模版。
并在 `package.json` 中预置了几个简单的脚本。

你需要确保你已拥有 [Java](https://www.java.com/zh_CN/) 与 [Node.js](https://nodejs.org/zh-cn/download/) 环境。

## 项目结构

```txt
.
├── LICENSE  // AGPL-3.0，你不应该用它进行商业或非法行为
├── README.md
├── bot  // 机器人实体，你可以自由编写代码扩展它
│   ├── README.md
│   └── index.js // 主文件
├── el  // 配置目录，存放机器人相关的配置（可自行解析 yml 文件）
│   ├── README.md
│   ├── index.js  // 所有配置文件（解析 yaml 的逻辑）
│   └── index.yml // 插件配置文件
├── mcl // mirai-console-loader 文件夹
├── nodemon.json  // 监听文件变动，自动重启（譬如修改配置时，非常方便）
├── package.json
│   ...
```

## 使用

![mirai release](https://img.shields.io/github/v/release/mamoe/mirai?label=mirai)
![mirai-console-loader release](https://img.shields.io/github/v/release/iTXTech/mirai-console-loader?label=mirai-console-loader)
![mirai-api-http release](https://img.shields.io/github/v/release/project-mirai/mirai-api-http?label=mirai-api-http)

### 克隆本模版

```sh
git clone https://github.com/ElpsyCN/el-bot-template your-el-bot
cd your-el-bot
```

### 安装依赖

> 请检查 el-bot 是否为最新版本 ![npm](https://img.shields.io/npm/v/el-bot)，模版的依赖更新可能要略微落后。  
> 安装最新版本 el-bot：`npm install el-bot@latest`

```sh
npm install
```

### 安装 mirai

由于种种原因，本项目将不再提供安装 mirai 的脚本与方法，你应当具有自行安装与启动 mirai 的能力。

推荐使用官方启动器 [mirai-console-loader](https://github.com/iTXTech/mirai-console-loader) 自行启动 [mirai](https://github.com/mamoe/mirai)（v1.0 以上） 与 [mirai-api-http](https://github.com/mamoe/mirai-api-http) 插件（v1.9.0 以上）。

下载 [MCL Releases](https://github.com/iTXTech/mirai-console-loader/releases)，并解压。

Example:

```sh
wget https://github.com/iTXTech/mirai-console-loader/releases/download/v1.0.3/mcl-1.0.3.zip
unzip -o -d mcl mcl-1.0.3.zip
```

### 启动 mirai

通过 [mirai-console-loader](https://github.com/iTXTech/mirai-console-loader) 启动 mirai。（您也可以使用其他任意方式，并记得加载 mirai-api-http 插件。）

> 如果 mcl 无法正常启动，您可以比对 `mcl/config.json` 版本是否正确。

```sh
cd mcl
./mcl
# 添加自动登录
/autoLogin add 712727946 yourpassword
```

### 配置

#### 配置 mirai-api-http 插件

下载 [mirai-api-http Releases](https://github.com/project-mirai/mirai-api-http/releases) jar 包，放置于 `mcl/plugins` 文件夹。

配置文件位于 `mcl/config/MiraiApiHttp/setting.yml`

最好自行修改你的 `authKey`，否则你的机器人将很可能被 [NTR](https://zh.moegirl.org/zh-hans/NTR)。

```yaml
cors:
  - "*"
host: 0.0.0.0
port: 4859
authKey: el-psy-congroo
enableWebsocket: true
```

#### 配置 bot

```js
// el/index.js
module.exports = {
  // 你登录的 QQ 号
  qq: 12345679,
};
```

如果您需要上传本地图片语音文件，您需要配置您的 `package.json` 文件中 `mcl.folder` 字段为你的 mirai 文件夹相对本项目的路径。

> 默认值为项目本身目录下的 `mcl` 文件夹，建议直接将 mcl 启动器置于 `mcl` 文件夹下。

### 启动 bot

> 记得新建一个终端，并确保你的 mirai 控制台保持打开与 QQ 已经登录。
> 检测控制台是否可以正常使用的一个方式是访问 `localhost:4859/about` 查看是否有信息返回。（如果你修改了端口号，记得替换。）

```sh
npm run start:bot
# yarn run start:bot
```

```sh
# 本质与 npm run start:bot 相同，不过配置了 nodemon 启动，所以当修改文件时可以自动重启。
npm run bot
# yarn bot
```

此时，你的 QQ 机器人就已经成功运行起来了。并将附带了一些默认的功能。

然后？然后参照 [el-bot 文档](https://docs.bot.elpsy.cn/) 自定义吧。

### 说明

> 确保你的 QQ 已在 mirai 控制台中登录。

el-bot 将与已启动的 mirai 已登录的 QQ 建立连接。（如连接失败，则每隔三秒，自动重新连接。）

### Webhook

- `enable`: 是否启用

```js
// el/index.js
module.exports = {
  webhook: {
    enable: true,
    path: "/webhook",
    port: 7777,
    secret: "el-psy-congroo",
  },
};
```
