import express, { Express, Request, Response, Router } from "express";

import { cacheMiddleware } from "../tools/cacheMiddleware";
import { trekScraper } from "../tools/trekScraper";

const router = express.Router();

router.get("/road", cacheMiddleware, async (req, res, next) => {
  const bikes = await trekScraper("road");
  res.send(bikes);
});

export default router;
