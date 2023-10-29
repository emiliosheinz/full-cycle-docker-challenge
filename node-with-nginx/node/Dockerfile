FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN apt-get update && \
  apt-get install -y wget && \
  wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
  chmod +x wait-for-it.sh

EXPOSE 3000

ENTRYPOINT [ "/bin/bash", "-c" ]
CMD ["./wait-for-it.sh db:3306 --strict --timeout=30 -- npm run start"]


