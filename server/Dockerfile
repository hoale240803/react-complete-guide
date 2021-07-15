FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./yarn.lock /usr/src/app
RUN yarn
COPY . /usr/src/app
EXPOSE 5000
CMD ["yarn", "start"]