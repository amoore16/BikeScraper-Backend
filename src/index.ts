import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.get("/hello", (req: Request, res: Response) => {
  console.log("request: ", res);
  res.send({ message: "hello" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running on localhost:${port}`);
});
