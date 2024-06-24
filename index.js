const { configDotenv } = require("dotenv");
const express = require("express");

configDotenv.apply();

const app = express();
const port = process.env.PORT || port;

app.get("/", (req, res) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () =>
  console.log(`[server]: listening on http://localhost:${port}`)
);
