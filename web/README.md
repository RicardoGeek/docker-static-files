run

```
export DOCKER_BUILDKIT=0                                                                      
export COMPOSE_DOCKER_CLI_BUILD=0
```

then run
```
docker build -t <given-image-name> .
```

voila
```
docker run -p 81:80 -d
```