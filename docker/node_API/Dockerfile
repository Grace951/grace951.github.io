FROM node:14.15.4

RUN npm install pm2 -g
RUN cd /home
RUN mkdir project

WORKDIR  ../../
COPY package.json .babelrc /home/project
COPY apiserver /home/project

RUN cd /home/project
RUN npm i

EXPOSE 3200
ENTRYPOINT nodemon apiserver/main.js

# CMD ["pm2-docker", "process.yml"]
