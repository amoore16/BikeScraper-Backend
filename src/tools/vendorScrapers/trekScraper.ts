import puppeteer from "puppeteer";
import { VendorEnums } from "./vendorEnum";

type Bike = {
  title?: string | null | undefined;
  price?: string | null | undefined;
  //   description?: string[] | null | undefined;
};

const trekScraper = async (type: string): Promise<Bike[]> => {
  // console.log(`Scraping Trek ${type} Bikes`);
  console.timeStamp(`Scraping Trek ${type}`);

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(VendorEnums.TREK_BASE + type);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const bikeWrapperSelector = ".productListItem";

  const bikeList = await page.$$eval(bikeWrapperSelector, (bikes) =>
    bikes.map((bike) => {
      return {
        title: bike.querySelector("h3")?.innerText,
        price: bike.querySelector("p")?.innerText,
        // description: descriptions,
        link:
          "https://trekbikes.com" +
          bike.querySelector("a")?.getAttribute("href"),
        image:
          "https://" +
          bike
            .querySelector("img")
            ?.getAttribute("src")
            ?.replace(/^.{2}/, "")
            ?.replace(/1920w/g, "")
            ?.replace(/\s+/g, ""),
      };
    })
  );

  await browser.close();

  return bikeList;
};

export { trekScraper };
