FROM node:9-alpine

WORKDIR /app/

COPY ./package.json /app/

RUN npm i --production

COPY . /app/

EXPOSE 80

CMD ["node", "index.js"]