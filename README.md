# Docker Basic Express Example:

### Latest docker desktop
https://docs.docker.com/desktop/install/mac-install/ 

### List images
docker ps

### Build from here
docker build -t 'bocacode':1.0 .

### Run the image locally
docker run --rm -d  -p 8000:8000/tcp bocacode:1.0 

### run the image locally and live edit
docker run --rm -d  -p 8000:8000/tcp -v $HOME/bocacode/docker:/src/ bocacode:1.0

### Create a docker container 
docker volume create db-data

### mount shared container
docker run --rm -d --mount source=db-data,target=/db -p 8000:8000/tcp bocacode:1.0 