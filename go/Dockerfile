# Creates the build stage from golang 1.19
FROM golang:1.19 AS build-stage

# Sets the workdir
WORKDIR /go/src/app

# Copies the go.mod and go.sum files 
COPY go.mod go.sum ./
RUN go mod download

# Copies the source code
COPY . .

# Builds the app
RUN CGO_ENABLED=0 GOOS=linux go build -o /app main.go

# Creates the final stage from scratch
FROM scratch
# Copies the app from the build stage
COPY --from=build-stage /app /app
# Sets the entrypoint
ENTRYPOINT ["/app"]