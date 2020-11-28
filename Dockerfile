FROM node:10-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine   
COPY --from=builder /usr/src/app/dist/Ecommerce/ /usr/share/nginx/html
