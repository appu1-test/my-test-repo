FROM python:3.10.8

COPY ./requirements.txt /app/requirements.txt
WORKDIR /app

RUN pip3 install -r requirements.txt --src /usr/local/src
COPY . /app
#RUN apt-get -y install python3-pip
EXPOSE 5000
CMD [ "python3", "book_app.py" ]