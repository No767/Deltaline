FROM nginx:alpine

WORKDIR /dockersite

COPY ./dockersite /usr/share/nginx/html

ENV PORT=8080

EXPOSE 8080
