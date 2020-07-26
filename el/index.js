require("dotenv").config()
const { resolve } = require("path")
const { utils } = require("el-bot")

console.log(utils.config.parse(resolve(__dirname, "./index.yml")))

module.exports = {
  qq: parseInt(process.env.BOT_QQ),
  setting: {
    enableWebsocket: true,
  },
  config: utils.config.parse(resolve(__dirname, "./index.yml")),
  // webhook
  webhook: {
    path: "/webhook",
    port: 7777,
    secret: "el-psy-congroo",
  },
}
