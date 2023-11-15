# Docker Challenge

This repository contains the code for the challenge presented in the Docker module of the Full Cycle course.

## Go

In this challenge, the task is to publish an image on Docker Hub. When this image is executed, it will simply print a message using the Go language. Additionally, the image for our Go project must be under 2MB in size.

### Solution
![Screenshot 2023-10-27 at 21 40 47](https://github.com/emiliosheinz/full-cycle-docker-challenge/assets/103655828/a16bae3a-5226-480d-bca0-c9c329cc69a3)

The solution is to use a multi-stage build. In the first stage, we use the official Golang image to build our application. In the second stage, we use the scratch image, which is an empty image, and copy only the binary file from the first stage. This way, we have a very small image, which is less than 2MB in size.

Check the [Dockerfile](./go/Dockerfile) for more details.

### How to run

```bash
docker run emiliosheinz/fc-docker-challenge-go
```
## Node with Nginx

In this challenge, you will put into practice what we have learned regarding the use of Nginx as a reverse proxy. The main idea is that when a user accesses Nginx, it will make a call to our Node.js application. This application, will add a record to our MySQL database, registering a name in the "people" table.

The response from the Node.js application to Nginx should be:

```
Full Cycle Rocks!

List of names registered in the database.
```

Generate the Docker Compose file in a way that all you need to do is run: `docker-compose up -d`, and everything should be up and running and available on port `8080`.

### Solution

Two different applications were created for this challenge: [node](./node) and [nginx](./nginx). The [docker-compose.yaml](./docker-compose.yaml) file was created to orchestrate the containers, setup the mysql database and the network between the containers.

**Node**

For the node application, the [Dockerfile](./node/Dockerfile) was created to build the image. The application is a simple node app that uses the mysql database to store the names. The application exposes the port `3000` and, using the _wait-for-it_ package, waits for the mysql database to be ready before starting. Every time the application is accessed, it will add a new name random name to the database and return the updated list of names.

**Nginx**

For the nginx application, the [Dockerfile](./nginx/Dockerfile) was created to build the image. The application is a simple nginx app that uses the node app as a reverse proxy. The application exposes the port `8080` and the configuration file is located at [nginx.conf](./nginx/nginx.conf) where we explicitly set the upstream to the node app.

**Docker Compose**

The [docker-compose.yaml](./docker-compose.yaml) file was created to orchestrate the containers, setup the mysql database and the network between the containers. The mysql database is configured to use a volume to persist the data. The node app, nginx app and mysql database are all connected to the same network that way they can communicate with each other and are only exposed to the host machine through the nginx app.

### How to run

1. Make sure you are in the right folder
    ```bash
    cd node-with-nginx
    ```
2. Run the docker-compose command
    ```bash
    docker-compose up -d
    ```
3. Access http://localhost:8080/
