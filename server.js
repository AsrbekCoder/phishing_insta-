const express = require("express");

const app = express();

const map = new Map();

app.get("/", (req, res) => {
  console.log("sort");
  res.send({ sort: "samar kut" });
});

app.listen(5050, console.log("server WEork"));
