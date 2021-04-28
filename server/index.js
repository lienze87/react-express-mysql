const express = require("express");
const router = require("./routes");

require("events").EventEmitter.prototype._maxListeners = 100;
const serverPort = 3000;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log(req.session, req.cookies, req.originalUrl);
  return next();
});

//引入路由
app.all("*", router);

//监听端口
app.listen(serverPort, function () {
  console.log("Example app listening at port:" + serverPort);
});
