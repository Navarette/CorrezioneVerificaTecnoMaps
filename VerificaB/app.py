from flask import Flask
from flask import send_file
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
import random

import geojson
import shapely.wkt

# pip install Flask-PyMongo
# pip install Flask
# pip install dnspython
# npm install -g --force nodemon
# pip install flask-cors
# pip install geojson
# pip install shapely
# pip install jsonify
# npm i -g nodemon
# pip install random

app = Flask(__name__)
# Importante qui va specificato il nome del DB
app.config["MONGO_URI"] = "mongodb+srv://navarettearnold:rIGXbQeVTx923EBu@cluster0.0gmimrb.mongodb.net/pokemon"
mongo = PyMongo(app)
CORS(app)
pokemon = mongo.db.b  # crea una variabile collegata al mongo db b
output = []
# itera i risultati della query al database.pokemon.find() esegue una query per ottenere tutti i documenti dal database "b".
for s in pokemon.find():
    # Per ogni documento trovato nella query, viene creato un nuovo dizionario con le chiavi "lat" e "lng" che corrispondono ai valori delle chiavi "lat" e "lng" nel documento. 
    # Questo dizionario viene quindi aggiunto alla lista output.
    output.append({"lat": s['lat'], "lng": s['lng']})

@app.route("/all")
def all():
    return (output)

@app.route("/pikachu")
def pikachu():
    return (output[random.randrange(0, len(output))])


@app.route("/charmender")
def charmender():
    return (output[random.randrange(0, len(output))])


@app.route("/bullbasaur")
def bullbasaur():
    return (output[random.randrange(0, len(output))])


@app.route("/snorlax")
def snorlax():
    return (output[random.randrange(0, len(output))])


if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()
