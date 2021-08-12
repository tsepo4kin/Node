const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

app.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(createPath("index"));
});

app.get("/test", (req, res) => {
  res.sendFile(createPath("test"));
});

app.get("/about-us", (req, res) => {
  res.redirect("test");
});

app.use((req, res) => {
  res.status(400).sendFile(createPath("error"));
});



