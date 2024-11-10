const express = require("express");

const app = express();

app.use("/",(req, res) => {
  res.send(console.log("Hello from backslash"));
});
app.use("/Hello",(req, res) => {
  res.send(console.log("Hello from hello"));
});
app.use((req, res) => {
  res.send(console.log("Hello from server"));
});

app.listen(3000, () => {
  console.log("Server is successfully listening..");
});
