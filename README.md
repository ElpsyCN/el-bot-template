# el-bot-template

![GitHub package.json version](https://img.shields.io/github/package-json/v/ElpsyCN/el-bot-template)
[![QQ Group](https://img.shields.io/badge/qq%20group-707408530-12B7F5)](https://shang.qq.com/wpa/qunwpa?idkey=5b0eef3e3256ce23981f3b0aa2457175c66ca9194efd266fd0e9a7dbe43ed653)
[![telegram](https://img.shields.io/badge/telegram-elpsy__cn-blue)](https://t.me/elpsy_cn)

本仓库为包含 [mirai](https://github.com/mamoe/mirai) 与 [el-bot](https://github.com/ElpsyCN/el-bot) 的基础可运行模版。
并在 `package.json` 中预置了几个简单的脚本。

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
```

## 使用

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

由于种种原因，本项目将不再提供安装 mirai 的脚本与方法，你应当具有自行安装 mirai 的能力。

`el-bot-template/mirai` 下的目录结构（你可以参照目录结构放置你从[某处](https://t.me/elpsy_cn)得到的 jar 文件）：

```txt
.
├── bot.yml
├── content
│   ├── mirai-console-0.5.2.jar
│   └── mirai-core-qqandroid-1.1.3.jar
├── device.json
├── libraries
├── mirai-console-wrapper-1.3.0.jar
└── plugins
    ├── MiraiAPIHTTP
    └── mirai-api-http-v1.7.4.jar
```

### 启动 mirai

由于种种原因，本项目将不再提供安装 mirai 的脚本与方法，你应当具有自行启动 mirai 的能力。

### 配置

#### 配置 mirai

进入 `mirai` 目录。

复制 `plugins/MiraiAPIHTTP/setting.example.yml` 文件为 `plugins/MiraiAPIHTTP/setting.yml`。

记得修改你的 `authKey`，这很重要，否则你的机器人将很可能被 [NTR](https://zh.moegirl.org/zh-hans/NTR)。

```yaml
authKey: el-psy-congroo
```

#### 配置自动登录

miraiOK 提供了自动登录功能，在你启动过 miraiOK 后，你的 mirai 文件夹中会出现 `config.txt` 这个文件，在文件末尾添加：

> 每次启动后自动登录

```sh
login QQ号 QQ密码
```

#### 配置 bot

复制 `.env.example` 文件为 `.env`。

填写你的 QQ。（用来告诉 el-bot 你是要登录哪个 QQ）

```bash
BOT_QQ=123456
```

### 启动 bot

> 记得新建一个终端，并确保你的 mirai 控制台保持打开。
> 检测控制台是否可以正常使用的一个方式是访问 <localhost:4859/about> 查看是否有信息返回。（如果你修改了端口号，记得替换。）

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

### 同时启动 mirai 和 bot

> 第一次最好别这么干，因为你还要在 mirai 控制台里验证登录什么的。

执行该脚本等价于同时启动下文描述的 mirai 和 el-bot。（此时两者的输出信息将显示在同一个终端中。）

el-bot 将在 mirai 启动三秒后再启动，以确保 QQ 已登录。（如果 mirai 启动较慢，还是建议先分开启动。）

```sh
npm run start
# yarn start
```

### Webhook

```sh
npm run webhook
# yarn webhook
```
