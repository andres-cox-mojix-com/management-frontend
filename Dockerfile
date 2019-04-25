FROM node:11.6.0-alpine AS builder
COPY . ./employment
WORKDIR /employment
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /employment/dist/employment/ /usr/share/nginx/html
