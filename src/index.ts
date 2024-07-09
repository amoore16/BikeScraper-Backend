import { Express, Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import scraperRouter from "./routes/scraperRouter";
import router from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running on localhost:${port}`);
});
