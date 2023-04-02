const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id == +id);
    res.setHeader("Content-Type", "text/html");
    const newindex = index
      .replace("**title**", product.title)
      .replace("**price**", product.price)
      .replace("**image**", product.images[0])
      .replace("**brand**", product.brand);
    res.end(newindex);
    return 0;
  }
  switch (req.url) {
    case "/":
      console.log("Server Started");
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/app":
      console.log("Server Started");
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;

    default:
      res.end("Error 404");
  }
});
server.listen(8000);
