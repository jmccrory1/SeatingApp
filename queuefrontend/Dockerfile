FROM node:latest

RUN mkdir /usr/app

COPY . /usr/app

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

RUN yarn

CMD ["npm", "start"]