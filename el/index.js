require("dotenv").config();
const { resolve } = require("path");
const { utils } = require("el-bot");

module.exports = {
  qq: parseInt(process.env.BOT_QQ),
  // 你可以直接解析 mirai-api-http 的配置
  setting: utils.config.parse(
    resolve(__dirname, "../mirai/plugins/MiraiAPIHTTP/setting.yml")
  ),
  // setting: {
  //   enableWebsocket: false, // 须与 mirai-api-http 的配置保持一致，若 mirai 已设置为 true，则此处也应为 true
  // },
  db: {
    // 默认关闭
    enable: false,
    uri: process.env.BOT_DB_URI,
    analytics: true,
  },
  config: utils.config.parse(resolve(__dirname, "./index.yml")),
  // webhook
  webhook: {
    enable: true,
    path: "/webhook",
    port: 7777,
    secret: "el-psy-congroo",
  },
};
