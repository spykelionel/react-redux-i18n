# Define variables
$ImageName = "spykelionel/react-template:latest"
$ContainerName = "react-template"
$HostPort = 3000
$ContainerPort = 80

# Pull the latest image from Docker Hub
Write-Host "Pulling the latest image: $ImageName"
docker pull $ImageName

# Stop and remove any existing container with the same name
Write-Host "Stopping and removing existing container (if any): $ContainerName"
docker stop $ContainerName -ErrorAction SilentlyContinue
docker rm $ContainerName -ErrorAction SilentlyContinue

# Build the Docker image (optional, only if you want to build it from a Dockerfile)
# Uncomment the following line if you want to build the image from a Dockerfile
# docker build -t $ImageName .

# Run the Docker container
Write-Host "Running the Docker container: $ContainerName"
docker-compose up

# Display running containers
docker ps
