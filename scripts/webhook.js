const http = require("http");
const createHandler = require("github-webhook-handler");
const el = require("../el");
const webhook = el.webhook;

const handler = createHandler({
  path: webhook.path || "/webhook",
  secret: webhook.secret || "el-psy-congroo",
});

const shell = require("shelljs");
const log = require("mirai-ts/dist/utils/log").default;

// 启动监听
http
  .createServer(function (req, res) {
    handler(req, res, function (err) {
      res.statusCode = 404;
      res.end("no such location");
    });
  })
  .listen(webhook.port || 7777);

log.success(`Listening ${webhook.path}:${webhook.port}`);

handler.on("error", function (err) {
  log.error("Error:", err.message);
});

// 处理
handler.on("push", function (event) {
  log.info(
    "Received a push event for %s to %s",
    event.payload.repository.name,
    event.payload.ref
  );

  // git pull repo
  if (shell.exec("git pull").code !== 0) {
    shell.echo("Error: Git pull xiao-yun failed");
    shell.exit(1);
  }
});

// no issues
// handler.on("issues", function (event) {
//   console.log(
//     "Received an issue event for %s action=%s: #%d %s",
//     event.payload.repository.name,
//     event.payload.action,
//     event.payload.issue.number,
//     event.payload.issue.title
//   );
// });
