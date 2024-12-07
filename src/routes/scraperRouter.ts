import express, { Express, Request, Response, Router } from "express";
import { cacheMiddleware } from "../tools/cacheMiddleware";
import BikeController from "../controllers/bikeController";

const router = express.Router();

router.get("/road", cacheMiddleware, BikeController.getRoadBikes);
router.get("/gravel", cacheMiddleware, BikeController.getGravelBikes);
router.get("/hardtail", cacheMiddleware, BikeController.getHardTailBikes);
router.get(
  "/dualsuspension",
  cacheMiddleware,
  BikeController.getDualSuspensionBikes
);

export default router;
