import puppeteer from "puppeteer";

type Bike = {
  title?: string | null | undefined;
  price?: string | null | undefined;
  description?: string[] | null | undefined;
};

const scraper = async (type: string): Promise<Bike[]> => {
  console.log("firing the web scraper!");

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://www.bikesonline.com/bikes/" + type);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const bikeWrapperSelector = ".findify-product-wrapper";

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
      };
    })
  );

  await browser.close();

  console.log('returning: ', bikeTitles)
  return bikeTitles;
};

export { scraper };
