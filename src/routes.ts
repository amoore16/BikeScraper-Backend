import express, { Express, Request, Response, Router } from "express";
import scraperRouter from "./routes/scraperRouter";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});
// scraper
router.use("/scraper", scraperRouter);

// db actions

// user actions

export default router;
