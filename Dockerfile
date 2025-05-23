FROM node:18-alpine

WORKDIR /santos_margareth_final_site

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5575

CMD ["npm", "run", "dev","--","--host","0.0.0.0"]