# Dockerfile for React client

# Build react client
FROM node:16-alpine

RUN mkdir -p /usr/src/app
# Working directory be app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app

###  Installing dependencies

RUN npm install

# copy local files to app folder
COPY . /usr/src/app

EXPOSE 3000

CMD ["npm","start"]