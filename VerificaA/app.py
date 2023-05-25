from flask import Flask
from flask import send_file
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS

import geojson
import shapely.wkt

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://navarettearnold:D3GP0u4i9FW1a7B1@cluster0.0gmimrb.mongodb.net/tane" #Importante qui va specificato il nome del DB

mongo = PyMongo(app)
CORS(app)

# Annotation that allows the function to be hit at the specific URL.


@app.route("/all")
def all():
    tane = mongo.db.tane
    output = []
    for s in tane.find():
        output.append({"lat":s['lat'],"lng":s['lng']})
    return jsonfy(output)

if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()