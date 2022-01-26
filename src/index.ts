import { Bot } from 'el-bot'
import el from './el'

const bot = new Bot(el)
bot.start()

// 监听消息
// bot.mirai.on("message", (msg) => {
//   console.log(msg)
// })
