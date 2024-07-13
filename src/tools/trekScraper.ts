import puppeteer from "puppeteer";

type Bike = {
  title?: string | null | undefined;
  price?: string | null | undefined;
  //   description?: string[] | null | undefined;
};

const trekScraper = async (type: string): Promise<Bike[]> => {
  console.log("firing the web scraper!");

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(
    "https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/domane/c/B221"
  );

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const bikeWrapperSelector = ".productListItem";

  const bikeList = await page.$$eval(bikeWrapperSelector, (bikes) =>
    bikes.map((bike) => {
      return {
        title: bike.querySelector("h3")?.innerText,
        price: bike.querySelector("p")?.innerText,
        // description: descriptions,
        link: bike.querySelector("a")?.getAttribute("href"),
        image: bike.querySelector("img")?.getAttribute("src"),
      };
    })
  );

  await browser.close();

  return bikeList;
};

export { trekScraper };
