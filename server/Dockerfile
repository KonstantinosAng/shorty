# Stage 1: Build dependencies
FROM node:16.13.1-alpine as base
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk add --no-cache --virtual build-base \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    python3 \
    make \
    g++ && yarn install && apk del build-base \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    python3 \
    make \
    g++

# Stage 2: Serve app
COPY . .
LABEL author="Konstantinos Angelopoulos"
EXPOSE 9999
CMD yarn start
