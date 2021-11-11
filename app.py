from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import config
import requests
import json
from flask import Flask, render_template, request, jsonify
import joblib
from sklearn.preprocessing import LabelEncoder

# Database Setup
database = 'tvtimedb'
engine = create_engine(
    f'postgresql://postgres:{config.password}@localhost:{config.port}/{database}')

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


@app.route("/vis")
def visualizations():
    print("rendering visualizations page")
    return render_template("vis.html")


@app.route("/get_your_recommendation", methods=["POST"])
def get_your_recommendation():

    print("starting recommendation page")

    # Create our session (link) from Python to the DB
    session = Session(engine)

    # Query unique network names
    results = session.query(tv_info.network).distinct().all()
    session.close()

    print(f"Networks: {results}")

    moodlist = request.get_json()
    print(f"Features/Moods: {moodlist}")

    filename = "network_predictor.h5"
    network_predictor_model = joblib.load(filename)
    print(f"Model: {network_predictor_model}")

    le = LabelEncoder()

    y_network = le.fit_transform(results)
    print(f"Network Labels: {y_network}")

    result = network_predictor_model.predict([moodlist])
    print(f"Result: {result}")

    suggested_network = le.inverse_transform(result)

    # return_network = f"Predicted Network: {suggested_network[0]}"

    return jsonify(suggested_network[0])


@app.route("/tvdata")
def tvdata():

    session = Session(engine)
    tv_data = session.query(tv_info.name, tv_info.followers, tv_info.runtime,
                            tv_info.network).order_by(tv_info.followers.desc()).all()

    session.close()

    tv_list = []
    for name, fol, runtime, network in tv_data:
        tv_dict = {}
        tv_dict["Name"] = name
        tv_dict["Followers"] = fol
        tv_dict["Runtime"] = runtime
        tv_dict["Network"] = network
        tv_list.append(tv_dict)

    return jsonify(tv_list)


@app.route("/show_predict", methods=["POST"])
def show_predict():

    features_list = request.get_json()
    print(f"Features: {features_list}")

    model = joblib.load("showsuccess_predictor.h5")
    print(f"Model: {model}")

    new_list = []
    for feature in features_list:
        new_list.append(int(feature)/100)

    prediction = model.predict([new_list])
    print(f"Predicted Followers: {prediction}")

    new_line = "\n"

    if (prediction > 0) and (prediction <= 1000000):
        return_string = f"The number of predicted followers is {round(prediction[0])}. Sorry! The show may not do well with the audience!"
    elif (prediction > 1000000) and (prediction <= 1500000):
        return_string = f"The number of predicted followers is {round(prediction[0])}. Your show will get an average commercial success!"
    elif (prediction > 1500000) and (prediction <= 2200000):
        return_string = f"The number of predicted followers is {round(prediction[0])}. CONGRATULATIONS! Your show will be a GREAT SUCCESS!"
    elif (prediction > 2200000):
        return_string = f"The number of predicted followers is {round(prediction[0])}. CONGRATULATIONS! Your show will be a BLOCKBUSTER!"
    return jsonify(return_string)


if __name__ == "__main__":
    app.run(debug=True)
