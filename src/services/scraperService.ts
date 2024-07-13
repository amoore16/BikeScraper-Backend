import { bikesOnlineScraper } from "../tools/bikesOnlineScraper";
import { trekScraper } from "../tools/trekScraper";

export const scraperService = async () => {
  let bikes = [];

  const bikesOnline = await bikesOnlineScraper("road/performance");
  const trek = await trekScraper("road");
  bikes = [...bikesOnline, ...trek];

  return bikes;
};
