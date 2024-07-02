import express, { Express, Request, Response, Router } from "express";
import { scraper } from "./scraper";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const bikes = await scraper();
  res.send(bikes);
});

export default router;
