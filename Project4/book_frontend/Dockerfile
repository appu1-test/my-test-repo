FROM node:18.2.0-alpine
WORKDIR /app
#new
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN chmod a+x node_modules/.bin/react-scripts

#FROM nginx:1.21.5-alpine as release
#COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 3000
CMD ["npm", "start"]
