FROM node:22-alpine

WORKDIR /app

RUN npm install --global pnpm@9.15.4

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
