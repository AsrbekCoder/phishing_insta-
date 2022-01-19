const express = require("express");

const app = express();

// const map = new Map();

app.use(express.json());
app.get("/", (req, res) => {
  const result = req.params;
  console.log(result);
  res.send({ sort: "samar kut" });
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

let port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Run ${port}...`));
