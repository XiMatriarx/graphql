FROM node:20-alpine AS graphql-build

ARG PORT=80

WORKDIR /app

COPY . .

RUN npm install --omit=dev
RUN npm run build

FROM node:20-alpine AS graphql

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY --from=graphql-build /app/node_modules node_modules
COPY --from=graphql-build /app/lib .

EXPOSE $PORT

CMD ["node", "index.js"]
