require("dotenv").config();
console.log("hi there");

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});
