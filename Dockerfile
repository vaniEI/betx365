FROM node:14
WORKDIR /app
COPY test.js ./
RUN npm install
CMD ["node", "test.js"]
