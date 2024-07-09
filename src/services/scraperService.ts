import { scraper } from "../tools/bikesOnlineScraper";

export const scraperService = async () => {

    setTimeout(async ()=> {
        try {
            const roadBikes = await (scraper("/road/performance"))
            await console.log('roadbikes', roadBikes);
        } catch (er) {
            console.log('there was an error')
        }
    }, 500);

}