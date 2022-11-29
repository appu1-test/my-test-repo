FROM postgres:15.1
RUN mkdir /sql
COPY *.sql /docker-entrypoint-initdb.d/
ENTRYPOINT ["docker-entrypoint.sh"]