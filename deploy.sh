#!/bin/sh

aws s3 cp index.html s3://elenas-game-app
aws s3 cp style.css s3://elenas-game-app
aws s3 cp script.js s3://elenas-game-app
aws s3 cp 404.html s3://elenas-game-app
aws s3 cp images s3://elenas-game-app/images --recursive