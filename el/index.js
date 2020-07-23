require("dotenv").config();
const config = require("el-bot/dist/utils/config");

module.exports = {
  qq: parseInt(process.env.BOT_QQ),
  setting: {
    enableWebsocket: true,
  },
  config: {
    plugins: config.parse("./el/index.yml"),
  },
  // webhook
  webhook: {
    path: "/webhook",
    port: 7777,
    secret: "el-psy-congroo",
  },
};
