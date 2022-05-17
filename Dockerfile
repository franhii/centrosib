from node:18-alpine as base
WORKDIR /src/
COPY package*.json ./
EXPOSE 3000

FROM base as dev
ENV NODE_ENV=dev
RUN npm ci
COPY --chown=node:node . ./
USER node
CMD ["npm", "run", "dev"]
CMD ["npm", "run", "migrate"]
CMD ["npm", "run", "seed"]

