from flask import Flask, request, abort
import database
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.get('/all')
def get_all_books():
    return database.get_all_data()

@app.get('/search')
def get_results():
    name = request.args.get('name', '')
    author = request.args.get('author', '')
    if name == '' and author == '':
        abort(400)
    return database.get_query_result(name,author)

@app.get('/book/<book_id>')
def get_book(book_id):
    result= database.get_book_data(book_id)
    if result == None:
        abort(404)
    return result

