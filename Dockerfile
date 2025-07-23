# Build React frontend
FROM node:18 AS build-step
WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install && npm run build

# Build Node backend and serve React build
FROM node:18
WORKDIR /app
COPY server ./server
COPY --from=build-step /app/client/build ./server/public
WORKDIR /app/server
RUN npm install
EXPOSE 5000
CMD ["node", "index.js"]
