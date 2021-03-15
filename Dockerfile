FROM node:14-alpine
 
WORKDIR /app
 
COPY . .


ENV PORT=8080
ENV PM2_PUBLIC_KEY t1rwe7zywovch81
ENV PM2_SECRET_KEY nue980bsne7ccav

RUN npm install pm2 -g
RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["pm2-runtime", "build/src/server.js"]
 