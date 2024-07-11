const http = require("http");

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
        console.log(body)
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end("<h3>post: 参数解析完成</h3>");
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("get: Hello, World!");
    }
  })
  .listen(13000, () => {
    console.log("Server listening on port 13000, http://localhost:13000");
  });
