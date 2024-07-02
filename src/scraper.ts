import puppeteer from "puppeteer";

type Bike = {
  title?: string | null | undefined;
};

const scraper = async (): Promise<Bike[]> => {
  console.log("firing the web scraper!");

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://www.bikesonline.com/bikes/road/performance");

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const bikeWrapperSelector = ".findify-product-wrapper";

  const bikeTitles = await page.$$eval(bikeWrapperSelector, (bikes) =>
    bikes.map((bike) => {
      console.log("bike ", bike.querySelector("h3"));
      return {
        title: bike.querySelector("h3")?.innerText,
      };
    })
  );

  await browser.close();

  return bikeTitles;
};

export { scraper };
