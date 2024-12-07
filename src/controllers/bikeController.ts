import { Request, Response } from "express";
import BikeScraperService from "../services/BikeScraperService";

class BikeController {
  async getRoadBikes(req: Request, res: Response) {
    const bikes = await BikeScraperService.road();

    //add db post/update logic here

    return res.json(bikes);
  }

  async getGravelBikes(req: Request, res: Response) {
    const bikes = await BikeScraperService.gravel();

    //add db post/update logic here

    return res.json(bikes);
  }

  async getHardTailBikes(req: Request, res: Response) {
    const bikes = await BikeScraperService.hardtail();

    //add db post/update logic here

    return res.json(bikes);
  }
  async getDualSuspensionBikes(req: Request, res: Response) {
    const bikes = await BikeScraperService.dualSuspension();

    //add db post/update logic here

    return res.json(bikes);
  }
}

export default new BikeController();
