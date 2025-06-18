FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -D webpack-cli

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
