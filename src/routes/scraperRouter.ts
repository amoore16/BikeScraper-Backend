import express, { Express, Request, Response, Router } from "express";
import bikesOnlineRouter from "./bikesOnlineRouter";
import trekRouter from "./trekRouter";
import roadBikeRouter from "./roadBikeRouter";
// import { scraperService } from "../services/scraperService";

const router = express.Router();

// different routes for each brand site
router.use("/bikesOnline", bikesOnlineRouter);

router.use("/trek", trekRouter);

// make one router just for bike type?
router.use("/roadBikes", roadBikeRouter);

export default router;
