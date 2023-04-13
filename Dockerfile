FROM node:18-alpine AS base

COPY . .

RUN npm run build

EXPOSE 3000

CMD npm run start
