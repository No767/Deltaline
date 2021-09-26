FROM nginx:alpine

WORKDIR /site

COPY ./dockersite /usr/share/nginx/html

ENV PORT=8080

EXPOSE 8080
