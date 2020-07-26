const Bot = require("el-bot")
const el = require("../el")

const bot = new Bot(el)
bot.start()

async function app() {
  bot.mirai.on("message", (msg) => {
    console.log(msg)
    // 复读
    msg.reply(msg.messageChain)
  })
}

app()
