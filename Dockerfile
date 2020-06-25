FROM node:12
  
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install    
RUN npm install -g ember-cli

COPY . .

EXPOSE 4200 35730

CMD [ "ember", "server" ]
