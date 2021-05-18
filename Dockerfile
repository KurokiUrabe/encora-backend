FROM node:14-alpine as base
WORKDIR /src
COPY package*.json /
EXPOSE 3001

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "src"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait && npm start

# COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build 