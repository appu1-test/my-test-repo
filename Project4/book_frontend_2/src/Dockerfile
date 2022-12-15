FROM node:18.2.0 as build
WORKDIR /app
#new 
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.21.5-alpine as release
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]