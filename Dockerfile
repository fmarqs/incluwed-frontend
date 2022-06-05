FROM node:17.9.0-slim

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --silent

COPY . .

CMD ["yarn", "start"]