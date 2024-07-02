import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import scraperRouter from "./scraperRouter";
import router from "./routes";

dotenv.config();

const app: Express = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running on localhost:${port}`);
});
