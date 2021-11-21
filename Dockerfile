FROM node:lts-alpine
LABEL author='Malcolm Horal <hello@mj0lken.xyz>'
WORKDIR /data
COPY ./package.json .
RUN npm
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm run start
