FROM node:12-alpine

#this is for alphine image
RUN apk --update add bash nano

#Copy the base data from repo to the image
COPY . .

#Now install all packages for the project
RUN npm i
CMD npm run container