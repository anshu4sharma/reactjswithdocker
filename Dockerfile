FROM node:latest

WORKDIR /reactwithdocker

COPY package* .

RUN npm install

# for prod not for dev

# RUN npm run build

# EXPOSE 5173

COPY . .

CMD [ "npm","run","dev"]

