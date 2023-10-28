# Full Cycle Docker Challenge

This repository contains the code for the challenge presented in the Docker module of the Full Cycle course.

## Go

In this challenge, the task is to publish an image on Docker Hub. When this image is executed, it will simply print a message using the Go language. Additionally, the image for our Go project must be under 2MB in size.

### Solution

The solution is to use a multi-stage build. In the first stage, we use the official Golang image to build our application. In the second stage, we use the scratch image, which is an empty image, and copy only the binary file from the first stage. This way, we have a very small image, which is less than 2MB in size.

Check the [Dockerfile](./go/Dockerfile) for more details.

### How to run

```bash
docker run emiliosheinz/fc-docker-challenge-go
```
