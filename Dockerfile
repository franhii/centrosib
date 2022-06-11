FROM node:18-alpine
WORKDIR /src/app
COPY . .
RUN npm ci
EXPOSE 3000
