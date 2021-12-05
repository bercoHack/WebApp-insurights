from flask import Flask, request, session, Response
from werkzeug.utils import redirect
from flask_cors import CORS, cross_origin
import pathlib
import os
import json


app = Flask(__name__)
CORS(app)
isLoggedIn = False

@app.route('/api/movies')
@cross_origin(supports_credentials=True)
def getMovies():
    dir_path = os.path.dirname(os.path.realpath(__file__))
    f = open(str(pathlib.Path(__file__).parent.resolve())+ "\\db.json", "r")
    data_dict = json.loads(f.read())
    return json.dumps(data_dict["movies"])

@app.route('/api/login')
def login():
    i =0
    

@app.route('/movies/<id>')
def movies(id):
    i =0


if __name__ == '__main__':
     app.run(port=5002)