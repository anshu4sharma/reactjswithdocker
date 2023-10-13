FROM node:latest

COPY . /reactwithdocker

WORKDIR /reactwithdocker

RUN npm install

# for prod not for dev

# RUN npm run build

EXPOSE 5173

CMD [ "npm","run","dev"]

