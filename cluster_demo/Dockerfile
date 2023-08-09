# Base image
FROM node:slim

# Creating a directory inside the base image and defining as the base directory
WORKDIR /app

# Copying the files of the root directory into the base directory
ADD . /app

# Installing the project dependencies
RUN npm install
RUN npm install pm2 -g

CMD ["pm2-runtime", "pm2.json"]