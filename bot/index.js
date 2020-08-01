const Bot = require("el-bot");
const el = require("../el");

const bot = new Bot(el);
// bot.start()
bot.start((msg) => {
  console.log(msg);
});

// 监听消息
// bot.mirai.on("message", (msg) => {
//   console.log(msg)
// })
