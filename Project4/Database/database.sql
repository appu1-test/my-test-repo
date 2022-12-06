CREATE DATABASE book_library;
\connect book_library
CREATE TABLE books_data(
    name character varying,
    image character varying,
    category character varying,
    author character varying,
    format character varying,
    price double precision,
    isbn bigint,
    PRIMARY KEY (isbn));

Copy books_data (name,isbn,image,category,author,price,format)
FROM '/home/ubuntu/my-test-repo/Project4/new.csv'
DELIMITER ','
CSV HEADER;
