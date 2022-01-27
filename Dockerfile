FROM nginx:alpine

WORKDIR /site

COPY ./site /usr/share/nginx/html

ENV PORT=8080

EXPOSE 8080
