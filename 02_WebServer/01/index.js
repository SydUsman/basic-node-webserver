const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("Server Started");
  res.setHeader("Content-Type", "text/html");
  res.end("Hello");
});
server.listen(8080);
