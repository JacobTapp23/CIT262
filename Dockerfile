FROM node:16-alpine

COPY . .

RUN npm install

WORKDIR /web
RUN npm run install
RUN npm run build
WORKDIR /

CMD ["npm","run","test"]