FROM node:20.8.0-alpine as node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm" ,"start"]