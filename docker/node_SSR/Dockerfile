FROM node:14.15.4

RUN npm install pm2 -g
RUN cd /home
RUN mkdir project

WORKDIR  ../../
COPY package.json .babelrc /home/project
COPY public /home/project
COPY src /home/project
COPY webpack /home/project

RUN cd /home/project
RUN npm i
RUN npm run build

EXPOSE 3100
ENTRYPOINT node dist/server.generated.js

# CMD ["pm2-docker", "process.yml"]
