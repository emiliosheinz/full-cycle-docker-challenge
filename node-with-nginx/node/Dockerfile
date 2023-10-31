FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN mkdir /usr/scripts

RUN apt-get update && \
  apt-get install -y curl && \
  wget -P /usr/scripts/ https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
  chmod +x /usr/scripts/wait-for-it.sh

EXPOSE 3000

ENTRYPOINT [ "/bin/bash", "-c" ]
CMD ["/usr/scripts/wait-for-it.sh db:3306 --strict --timeout=30 -- npm run start"]


