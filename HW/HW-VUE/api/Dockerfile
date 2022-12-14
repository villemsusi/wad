FROM node:18-alpine
RUN npm install -g npm@9.2.0
WORKDIR /app/api
COPY . .
RUN npm install

CMD [ "node", "app" ]

EXPOSE 3000