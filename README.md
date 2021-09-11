## Install project

```bash
cd srv/nodejs
npm i
cd ../..

```

## Starting the server

```bash
docker-compose up
```

Open site http://localhost:4000/IT-Shark-pro_web-school/

```bash
docker-compose down
```

## Build project

```bash
docker-compose run jekyll /bin/bash
jekyll clean
jekyll build
exit
docker-compose down
```

## Deploy to GH-pages

Build project.

Deploy:

```bash
cd srv/nodejs
#npm i
npm run deploy
cd ../..
```
