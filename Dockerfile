## STAGE 1: Build ###

FROM node:10

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start


