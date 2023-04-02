const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("hello");
  console.log("Server Started");
});
server.listen(8000);
