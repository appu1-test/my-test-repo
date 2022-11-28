FROM python:3.10.8

RUN mkdir -p /app
WORKDIR /app
COPY requirements.txt .
RUN apt-get -y install python3-pip

EXPOSE 5000
CMD [ "python3", "book_app.py" ]