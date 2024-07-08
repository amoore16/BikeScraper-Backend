FROM ghcr.io/puppeteer/puppeteer:22

USER root

# Add user so we don't need --no-sandbox.
RUN mkdir -p /home/pptruser/Downloads ./ \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser ./

# Run everything after as non-privileged user.
USER pptruser

# Install Puppeteer under /node_modules so it's available system-wide
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/node", "dist/index.js"]

