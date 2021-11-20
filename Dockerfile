FROM node:lts-alpine
LABEL author='Yassine Fathi <hello@mj0lken.xyz>'
WORKDIR /data
COPY ./package.json .
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
CMD yarn start
