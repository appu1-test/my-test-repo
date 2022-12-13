from flask import Flask, request, abort
from flask_cors import CORS, cross_origin
import backend.database

app = Flask(__name__)
CORS(app)

@app.get('/')
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

if __name__=='__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)

