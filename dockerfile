FROM python:3

WORKDIR /

WORKDIR /Django

COPY requirements*.txt /Django/

RUN pip install -r requirements.txt

ENV PORT=8080

EXPOSE 8080
