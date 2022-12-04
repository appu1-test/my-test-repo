CREATE DATABASE book_library;

CREATE TABLE book_library.books_data(
    name character varying,
    image character varying,
    category character varying,
    author character varying,
    format character varying,
    price double precision,
    isbn bigint,
    PRIMARY KEY (isbn));

COPY books_data (name,isbn,image,category,author,price,format)
FROM 'new.csv'
DELIMITER ','
CSV HEADER;
