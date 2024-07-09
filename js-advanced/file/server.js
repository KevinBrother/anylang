const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http
  .createServer((req, res) => {
    // 支持跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const params = querystring.parse(body);
        console.log("POST请求参数:", params);
        res.end("post: 参数解析完成");
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("get: Hello, World!");
    }
  })
  .listen(13000, () => {
    console.log("Server listening on port 13000, http://localhost:13000");
  });
