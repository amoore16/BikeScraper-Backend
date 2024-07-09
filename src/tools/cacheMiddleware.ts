import { caching } from "cache-manager";

const memoryCache = await caching("memory", {
  max: 100,
  ttl: 8.64e7 /*milliseconds*/,
});

export const cacheMiddleware = async (req: any, res: any, next: any) => {
  const key = req.originalUrl;

  try {
    const cachedResponse = await memoryCache.get(key);
    if (cachedResponse) {
      // Cache hit, return the cached response
      return res.send(cachedResponse);
    } else {
      // Cache miss, proceed to the route handler
      res.sendResponse = res.send;
      res.send = async (body: any) => {
        // Store the response in cache
        await memoryCache.set(key, body);
        res.sendResponse(body);
      };
      next();
    }
  } catch (err) {
    next(err);
  }
};
