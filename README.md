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
git clone https://github.com/ElpsyCN/el-bot-template your-el-bot
cd your-el-bot
```

### 安装依赖

```sh
npm install
```

### 安装 mirai

安装 mirai 依赖，会显示交互命令行，选择对应版本下载即可。

```sh
npm install:mirai
```

> 你也可以手动下载 [mirai-console-wrapper](https://github.com/mamoe/mirai-console-wrapper/releases) 和 [mirai-api-http](https://github.com/mamoe/mirai-api-http/releases)。
> 因为国内行情，mirai-api-http 可能下载较慢，你也可以进群 707408530，从群文件中获取。

并放置如下：

- `el-bot/mirai-console-wrapper-*.jar`
- `el-bot/plugins/mirai-api-http-*.jar`

### 启动 mirai

> Windows 用户不用执行下述脚本，直接在文件夹中双击打开 miraiOK 开头的 exe 文件即可。

```sh
npm run start:mirai
```

> 此时 `miraiOK` 会自动下载 `mirai-console-wrapper`、 `mirai-console` 和 `mirai-core-qqandroid` 的 jar 包，并放到对应位置。
> 如果下载失败。你可以进群 `707408530` 从群文件中获取，并手动放置到 content 文件夹下。

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
# yarn bot
```

此时，你的 QQ 机器人就已经成功运行起来了。并将附带了一些默认的功能。

然后？然后参照 [el-bot 文档](https://docs.bot.elpsy.cn/) 自定义吧。

### 同时启动 mirai 和 bot

> 第一次最好别这么干，因为你还要在 mirai 控制台里验证登录什么的。

执行该脚本等价于同时启动下文描述的 mirai 和 el-bot。（此时两者的输出信息将显示在同一个终端中。）

```sh
npm run start
# yarn start
```

### Webhook

```sh
npm run webhook
# yarn webhook
```
