import type { Bot } from 'el-bot'

export default (ctx: Bot) => {
  const mirai = ctx.mirai
  mirai.on('message', (msg) => {
    msg.reply(
      '我是一个无情的自定义测试插件，可以到 el/index.yml plugins.custom 处关闭我。',
    )
  })
}
