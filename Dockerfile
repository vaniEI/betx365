FROM node:14
WORKDIR /app
COPY test.js ./
EXPOSE 3001
RUN npm install express
CMD ["node", "test.js"]
