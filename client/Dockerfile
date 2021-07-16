FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app

RUN yarn install

#COPY OTHERS FOLDER( SOURCE CODE TO /usr/src/app)
COPY . .

ENV REACT_APP_BASE_URL=http://localhost:5000/api

EXPOSE 3000

CMD ["yarn", "start"]