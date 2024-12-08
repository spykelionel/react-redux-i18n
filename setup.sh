#!/bin/bash

# Define variables
IMAGE_NAME="spykelionel/react-template:latest"
CONTAINER_NAME="react-template"
HOST_PORT=300
CONTAINER_PORT=80 #nginx port

# Pull the latest image from Docker Hub
echo "Pulling the latest image: $IMAGE_NAME"
docker pull $IMAGE_NAME

# Stop and remove any existing container with the same name
echo "Stopping and removing existing container (if any): $CONTAINER_NAME"
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

# Build the Docker image (optional, only if you want to build it from a Dockerfile)
# Uncomment the following line if you want to build the image from a Dockerfile
# docker build -t $IMAGE_NAME .

# Run the Docker container
echo "Running the Docker container: $CONTAINER_NAME"
docker run $CONTAINER_NAME 

# Display running containers
docker ps
