import express, { Express, Request, Response, Router } from "express";
import { scraper } from "./bikesOnlineScraper";

const router = express.Router();

// get road
router.get("/road", async (req, res, next) => {
  const bikes = await scraper("/road/performance");
  res.send(bikes);
});

// get gravel
router.get("/road", async (req, res, next) => {
  const bikes = await scraper("/road/performance");
  res.send(bikes);
});

// get dual suspension
router.get("/mountain", async (req, res, next) => {
  const bikes = await scraper("/mountain/dual-suspension");
  res.send(bikes);
});

export default router;
