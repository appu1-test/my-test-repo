import os
import psycopg2

conn = psycopg2.connect(dbname="book_library",user="postgres",password="admin",host="localhost",port=5432)

cursor = conn.cursor()

def get_all_data():
    Query = "select * from books_data;"
    cursor.execute(Query)
    record_new= cursor.fetchall()
    results_new=[]
    for row in record_new:
        results_new.append(
            {
                "name": row[0],
                "image":row[1],
                "category":row[2],
                "author":row[3],
                "format":row[4],
                "price":row[5],
                "isbn":row[6]
            }
        )
    return results_new

def get_query_result(name, author):
    if name != '':
        Query = "select * from books_data where name ILIKE '%s'" % name
    if author != '':
        Query = "select * from books_data where author ILIKE '%s'" % author
    if name != '' and author != '':
        Query = "select * from books_data where name ILIKE '%s' and author ILIKE '%s'" % (name,author)
    cursor.execute(Query)
    records= cursor.fetchall()
    results=[]
    for row in records:
        results.append(
            {
                "name": row[0],
                "image":row[1],
                "category":row[2],
                "author":row[3],
                "format":row[4],
                "price":row[5],
                "isbn":row[6]
            }
        )
    return results

def get_book_data(book_id):
    Query = "select * from books_data WHERE isbn = %s" % book_id
    cursor.execute(Query)
    table=cursor.fetchall()
    if len(table) == 0:
        return None
    book_data=table[0]
    return {
        "name": book_data[0],
        "image":book_data[1],
        "category":book_data[2],
        "author":book_data[3],
        "format":book_data[4],
        "price":book_data[5],
        "isbn":book_data[6]
    }