from node:18-alpine as base
WORKDIR /src/
COPY package*.json ./
EXPOSE 3000

FROM base as dev
ENV NODE_ENV=dev
COPY --chown=node:node . ./
USER node
RUN npm ci
CMD ["npm", "run", "dev"]

