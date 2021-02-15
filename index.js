const { default: Bot } = require("el-bot");
const el = require("./el");

// @ts-ignore
const bot = new Bot(el);
bot.start();

// 监听消息
// bot.mirai.on("message", (msg) => {
//   console.log(msg)
// })
