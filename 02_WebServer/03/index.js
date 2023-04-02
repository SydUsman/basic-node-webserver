const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const myData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = myData.products[0];

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(myData));
      break;
    case "/product":
      res.setHeader("Content-Type", "text/html");
      let newIndex=index.replace("HelloWorld",product.title)
      res.end(newIndex);
      break;
    default:
      res.writeHead(404);
      res.end();
      break;
  }
  console.log("Server Started");
});
server.listen(8000);
