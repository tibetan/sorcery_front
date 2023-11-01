FROM node:20.9-alpine

# Set the working directory in the container
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH="/app/node_modules/.bin:$PATH"

# install app dependencies
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add project sources in /app
COPY . ./

# start app
CMD ["npm", "start"]