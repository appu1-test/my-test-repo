FROM python:3.10.8

WORKDIR /app
COPY requirements.txt .
RUN pip3 install -r requirements.txt --src /usr/local/src
COPY . .
#RUN apt-get -y install python3-pip
EXPOSE 5000
CMD [ "python3", "book_app.py" ]