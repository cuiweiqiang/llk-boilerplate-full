FROM node:10.5.0-alpine

MAINTAINER cuiweiqiang

WORKDIR /app

RUN apk update && apk add  tzdata \
    && cp -r -f /usr/share/zoneinfo/Asia/Chongqing /etc/localtime

# RUN \
#     rm /etc/localtime && \
#     ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

ADD ./package.json /app/

RUN npm install --registry=https://registry.npm.taobao.org

ADD . /app

EXPOSE 3000

ENV NODE_ENV production

CMD npm start