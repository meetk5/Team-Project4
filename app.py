from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import config
import requests
import json
from flask import Flask, render_template, request, jsonify
import joblib
from sklearn.preprocessing import LabelEncoder

# Database Setup
database = 'tvtimedb'
engine = create_engine(f'postgresql://postgres:{config.password}@localhost:{config.port}/{database}')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
tv_info = Base.classes.tvshows

app = Flask(__name__)

@app.route("/")
def home():
    print("rendering homepage")
    return render_template("index.html")

@app.route("/network")
def network():
    print("rendering network page")
    return render_template("network.html")

@app.route("/team")
def team():
    print("rendering team page")
    return render_template("team.html")

@app.route("/followers")
def followers():
    print("rendering follwers page")
    return render_template("followers.html")

@app.route("/visualizations")
def visualizations():
    print("rendering visualizations page")
    return render_template("vis1.html")


@app.route("/get_your_recommendation", methods=["POST"])
def get_your_recommendation():

    print("starting recommendation page")

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query all passengers
    results = session.query(tv_info.network).distinct().all()
    session.close()

    print(f"Networks: {results}")

    moodlist = request.get_json()
    print(f"Features/Moods: {moodlist}")

    # moodlist = []
    
    # for mood in feature_list:
    #     moodlist.append(mood)
    
    # print(f"Moods: {moodlist}")

    filename = "network_predictor.h5"
    network_predictor_model = joblib.load(filename)
    print(network_predictor_model)

    le = LabelEncoder()

    y_network = le.fit_transform(results)
    print(f"Network Labels: {y_network}")

    result = network_predictor_model.predict([moodlist])
    print(f"Result: {result}")

    suggested_network = le.inverse_transform(result)

    print(f"Predicted Network: {suggested_network}")

    return jsonify(suggested_network[0])





if __name__ == "__main__":
    app.run(debug=True) 