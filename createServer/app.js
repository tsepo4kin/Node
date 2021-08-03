const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log(req.url, req.method)

  res.setHeader("Content-type", "application/json");
  // res.write("<h1>Hello world!</h1>");
  // res.write("<p>My name is Kirill</p>");

  const data = JSON.stringify([
    {name: 'Kate', age: 23},
    {name: 'Ivan', age: 27}
  ]);

  res.end(data);
});

server.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
