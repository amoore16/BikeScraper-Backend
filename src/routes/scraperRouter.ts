import express, { Express, Request, Response, Router } from "express";
import { scraper } from "../tools/bikesOnlineScraper";
import bikesOnlineRouter from "./bikesOnlineRouter";

const router = express.Router();

// different routes for each brand site
router.use("/bikesOnline", bikesOnlineRouter);

router.get("/trek", async (req, res, next) => {
  res.send();
});

export default router;
