import { bikesOnlineScraper } from "../tools/vendorScrapers/bikesOnlineScraper";
import { trekScraper } from "../tools/vendorScrapers/trekScraper";
import { VendorEnums } from "../tools/vendorScrapers/vendorEnum";

class BikeScraperService {
  async road() {
    let roadBikes = [];

    //add vendors here
    const bikesOnline = await bikesOnlineScraper(VendorEnums.BIKESONLINE_ROAD);
    const trek = await trekScraper(VendorEnums.TREK_ROAD);

    roadBikes = [...bikesOnline, ...trek];

    return roadBikes;
  }

  async gravel() {
    let gravelBikes = [];

    //add vendors here
    const bikesOnline = await bikesOnlineScraper(
      VendorEnums.BIKESONLINE_GRAVEL
    );
    const trek = await trekScraper(VendorEnums.TREK_GRAVEL);

    gravelBikes = [...bikesOnline, ...trek];

    return gravelBikes;
  }

  async hardtail() {
    let hardtailBikes = [];

    //add vendors here
    const bikesOnline = await bikesOnlineScraper(
      VendorEnums.BIKESONLINE_HARDTAIL
    );
    const trek = await trekScraper("road");

    hardtailBikes = [...bikesOnline, ...trek];

    return hardtailBikes;
  }

  async dualSuspension() {
    let dualSuspensionBikes = [];

    //add vendors here
    const bikesOnline = await bikesOnlineScraper(
      VendorEnums.BIKESONLINE_DUALSUSPENSION
    );
    const trek = await trekScraper("road");

    dualSuspensionBikes = [...bikesOnline, ...trek];

    return dualSuspensionBikes;
  }
}

export default new BikeScraperService();
