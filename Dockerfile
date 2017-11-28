FROM node:8.9.1-alpine

RUN mkdir -p /usr/src/app/server

WORKDIR /usr/src/app
ADD ./client ./client
RUN cd client && \
    npm install && \
    npm run build && \
    cd .. && \
    mv client/build server && \
    mv server/build server/public && \
    rm -rf client

WORKDIR /usr/src/app/server
ADD ./server ./
RUN npm install && \
    npm run build && \
    npm prune --production

CMD [ "npm", "start" ]