CREATE DATABASE book_library;

CREATE TABLE books_data(
    name character varying,
    image character varying,
    category character varying,
    author character varying,
    format character varying,
    price double precision,
    primary key isbn bigint);

COPY books_data (name,isbn,image,category,author,price,format)
FROM 'new.csv'
DELIMITER ','
CSV HEADER;
