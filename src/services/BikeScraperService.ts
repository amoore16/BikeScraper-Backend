import { bikesOnlineScraper } from "../tools/vendorScrapers/bikesOnlineScraper";
import { trekScraper } from "../tools/vendorScrapers/trekScraper";

class BikeScraperService {
  async road() {
    let roadBikes = [];

    //add vendors here
    const bikesOnline = await bikesOnlineScraper("road/performance");
    const trek = await trekScraper("road");

    roadBikes = [...bikesOnline, ...trek];

    return roadBikes;
  }

  async gravel() {
    let gravelBikes = [];

    //add vendors here
    const bikesOnline = await bikesOnlineScraper("gravel");
    const trek = await trekScraper("road");

    gravelBikes = [...bikesOnline, ...trek];

    return gravelBikes;
  }

  async hardtail() {
    let hardtailBikes = [];

    //add vendors here
    const bikesOnline = await bikesOnlineScraper("mountain/hardtail");
    const trek = await trekScraper("road");

    hardtailBikes = [...bikesOnline, ...trek];

    return hardtailBikes;
  }

  async dualSuspension() {
    let dualSuspensionBikes = [];

    //add vendors here
    const bikesOnline = await bikesOnlineScraper("mountain/dual-suspension");
    const trek = await trekScraper("road");

    dualSuspensionBikes = [...bikesOnline, ...trek];

    return dualSuspensionBikes;
  }
}

export default new BikeScraperService();
