import express, { Express, Request, Response, Router } from "express";

import { cacheMiddleware } from "../tools/cacheMiddleware";
// import { trekScraper } from "../tools/trekScraper";
// import { bikesOnlineScraper } from "../tools/bikesOnlineScraper";
import { scraperService } from "../services/scraperService";

const router = express.Router();

router.get("/", cacheMiddleware, async (req, res, next) => {
  const bikes = await scraperService();
  res.send(bikes);
});

export default router;
