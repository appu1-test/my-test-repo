FROM postgres:15.1
RUN mkdir /sql
ENV POSTGRES_USER="postgres"
ENV POSTGRES_PASSWORD="admin"
COPY database.sql /docker-entrypoint-initdb.d/
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["postgres"]