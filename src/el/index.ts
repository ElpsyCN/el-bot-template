import type { ElConfig } from 'el-bot'
const config: ElConfig = {
  // @ts-expect-error dotenv
  qq: parseInt(process.env.BOT_QQ),
  // 你可以直接解析 mirai-api-http 的配置
  setting: 'mcl/config/net.mamoe.mirai-api-http/setting.yml',
  // setting: {
  //   enableWebsocket: false, // 须与 mirai-api-http 的配置保持一致，若 mirai 已设置为 true，则此处也应为 true
  // },
  db: {
    // 默认关闭
    enable: false,
    uri: process.env.BOT_DB_URI,
    analytics: true,
  },
  bot: {
    plugins: {
      // default: ['rss'],
      custom: ['./plugins/test'],
    },
    rss: [
      {
        name: '云游君的小站',
        url: 'https://www.yunyoujun.cn/atom.xml',
        customFields: {
          item: ['updated', 'summary'],
        },
        content: [
          '标题：${item.title}',
          '链接：${item.link}',
          '时间：${item.updated}',
        ],
        target: {
          group: [707408530],
        },
      },
    ],
    answer: [
      {
        re: '早呀|早上|哦哈呦|起床啦',
        reply: [
          {
            type: 'Plain',
            text: '新的一天也要加油鸭',
          },
        ],
      },
      {
        re: '晚安|哦呀斯密',
        api: 'https://el-bot-api.vercel.app/api/wanan',
        reply: '${data[0]}',
      },
      {
        at: true,
        includes: '在吗',
        reply: '我在',
      },
      {
        includes: ['bing', '壁纸'],
        reply: [
          {
            type: 'Image',
            url: 'https://images.weserv.nl/?url=https://bing.ioliu.cn/v1/rand',
          },
        ],
      },
    ],
  },
  // webhook
  webhook: {
    enable: true,
    path: '/webhook',
    port: 7777,
    secret: 'el-psy-congroo',
  },
}

export default config
