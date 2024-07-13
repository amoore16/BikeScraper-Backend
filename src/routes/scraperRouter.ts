import express, { Express, Request, Response, Router } from "express";
import bikesOnlineRouter from "./bikesOnlineRouter";
import trekRouter from "./trekRouter";

const router = express.Router();

// different routes for each brand site
router.use("/bikesOnline", bikesOnlineRouter);

router.use("/trek", trekRouter);

// make one router just for bike type?
// router.user('/roadBikes')

export default router;
