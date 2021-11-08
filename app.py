import requests
import json
from flask import Flask, render_template, request, jsonify
import joblib
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)

@app.route("/")
def home():
    print("rendering homepage")
    return render_template("index.html")

@app.route("/network")
def network():
    print("rendering network page")
    return render_template("network.html")

@app.route("/followers")
def network():
    print("rendering follwers page")
    return render_template("followers.html")

@app.route("/team")
def network():
    print("rendering team page")
    return render_template("team.html")

@app.route("/visualizations")
def network():
    print("rendering visualizations page")
    return render_template("vis1.html")


@app.route("/get_your_recommendation", methods=["POST"])
def get_your_recommendation():

    print("starting recommendation page")
    feature_list = request.get_json()
    print(f"Features: {feature_list}")

    moodlist = []
    for mood in feature_list:
        moodlist.append(mood)
    
    print(f"Moods: {moodlist}")

    filename = "network_predictor.h5"
    network_predictor_model = joblib.load(filename)
    print(network_predictor_model)

    le = LabelEncoder()

    result = network_predictor_model.predict([moodlist])
    print(f"Result: {result}")

    suggested_network = le.inverse_transform(result)

    print(f"Network: {suggested_network}")

    return jsonify(suggested_network[0])











if __name__ == "__main__":
    app.run(debug=True) 