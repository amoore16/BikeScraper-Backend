import express, { Express, Request, Response, Router } from "express";

import { bikesOnlineScraper } from "../tools/bikesOnlineScraper";
import { cacheMiddleware } from "../tools/cacheMiddleware";

const router = express.Router();

// get road
router.get("/road", cacheMiddleware, async (req, res, next) => {
  const bikes = await bikesOnlineScraper("road/performance");
  res.send(bikes);
});

// get gravel
router.get("/gravel", cacheMiddleware, async (req, res, next) => {
  try {
    const bikes = await bikesOnlineScraper("gravel-adventure");
    res.send(bikes);
  } catch {
    res.send("error");
  }
});

// get dual suspension
router.get("/dual-suspension", cacheMiddleware, async (req, res, next) => {
  const bikes = await bikesOnlineScraper("mountain/dual-suspension");
  res.send(bikes);
});

// get hard tail
router.get("/hardtail", cacheMiddleware, async (req, res, next) => {
  const bikes = await bikesOnlineScraper("mountain/hardtail");
  res.send(bikes);
});

export default router;
