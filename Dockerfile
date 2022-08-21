FROM node:current-alpine3.16
WORKDIR /src/
COPY . .
run npm install
ENV PORT=8000
EXPOSE 8000
CMD ["npm", "start"]