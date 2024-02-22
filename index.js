const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.get("/validateIdcomAuthRedirect", (req, res) => {
  const htmlContent = fs.readFileSync(
    path.resolve(__dirname, "success.html"),
    "utf8"
  );
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
