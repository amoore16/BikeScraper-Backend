import express, { Express, Request, Response, Router } from "express";
import scraperRouter from "./routes/scraperRouter";

const router = express.Router();

// scraper
router.use("/scraper", scraperRouter);

// db actions

// user actions

export default router;
