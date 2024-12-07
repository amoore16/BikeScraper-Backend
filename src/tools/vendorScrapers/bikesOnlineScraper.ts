import puppeteer from "puppeteer";

type Bike = {
  title?: string | null | undefined;
  price?: string | null | undefined;
  description?: string[] | null | undefined;
};

const bikesOnlineScraper = async (type: string): Promise<Bike[]> => {
  console.log("firing the web scraper!");

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://www.bikesonline.com/bikes/" + type);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const bikeWrapperSelector = ".findify-components--cards--product";

  const bikeTitles = await page.$$eval(bikeWrapperSelector, (bikes) =>
    bikes.map((bike) => {
      let descriptions: string[] = [];
      bike
        .querySelectorAll("li")
        .forEach((li) => descriptions.push(li.innerText));

      return {
        title: bike.querySelector("h3")?.innerText,
        price: bike.querySelector(
          ".findify-components--cards--product--price__sale-price"
        )?.innerHTML,
        description: descriptions,
        link: bike.getAttribute("href"),
        image: bike.querySelector("img")?.getAttribute("src"),
      };
    })
  );

  await browser.close();

  return bikeTitles;
};

export { bikesOnlineScraper };
