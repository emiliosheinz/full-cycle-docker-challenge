![fullcycle-logo](https://github.com/emiliosheinz/full-cycle-docker-challenge/assets/103655828/29f22bdd-78f7-46ad-bbe4-4ac5665ddc8d)

# Docker Challenge

This repository contains the code for the challenge presented in the Docker module of the Full Cycle course.

## Go

In this challenge, the task is to publish an image on Docker Hub. When this image is executed, it will simply print a message using the Go language. Additionally, the image for our Go project must be under 2MB in size.

### Solution
![Screenshot 2023-10-27 at 21 40 47](https://github.com/emiliosheinz/full-cycle-docker-challenge/assets/103655828/b55be641-4048-470c-8dff-4ce0b3b00a31)

The solution is to use a multi-stage build. In the first stage, we use the official Golang image to build our application. In the second stage, we use the scratch image, which is an empty image, and copy only the binary file from the first stage. This way, we have a very small image, which is less than 2MB in size.

Check the [Dockerfile](./go/Dockerfile) for more details.

### How to run

```bash
docker run emiliosheinz/fc-docker-challenge-go
```
