const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server request");

  res.setHeader("Content-type", "text/html");

  const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

  let basePath = "";

  switch (req.url) {
    case "/":
    case "/home":
    case "/index.html":
      basePath = createPath("index");
      res.statusCode = 200;
      break;
    case "/about":
      res.statusCode = 301;
      res.setHeader("Location", "/");
      res.end();
      break;
    case "/test":
      basePath = createPath("test");
      res.statusCode = 200;
      break;
    default:
      basePath = createPath("error");
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
