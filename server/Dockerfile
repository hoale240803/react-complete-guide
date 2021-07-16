FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app

RUN yarn install


COPY . .

EXPOSE 5000

CMD ["yarn", "start"]