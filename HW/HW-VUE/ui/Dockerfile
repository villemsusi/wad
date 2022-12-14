FROM node:18-alpine
RUN npm install -g npm@9.2.0
WORKDIR /app/ui
COPY . .
RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]