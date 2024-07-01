import express, { Express, Request, Response, Router } from "express";
import { scraper } from "./scraper";

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("test 1");
  // scraper();
  res.send({ message: "scraper endpoint data" });
});

export default router;
