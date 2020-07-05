#base server image
FROM node:alpine

#create work dir on image
WORKDIR '/app'

# copy package.json over and get node dependencies installed
COPY package.json .
RUN npm install

# copy over the rest of the app files
COPY . .

CMD ["npm", "start"]
