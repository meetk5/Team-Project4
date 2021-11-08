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

@app.route("/get_your_recommendation", methods=["POST"])
def get_your_recommendation():
    mood_list = request.get_json()
    print(mood_list)

    filename = "network_predictor.h5"
    network_predictor_model = joblib.load(filename)

    le = LabelEncoder()

    result = network_predictor_model.predict([mood_list])

    suggested_network = le.inverse_transform(result)

    print(suggested_network)

    return jsonify(suggested_network[0])











if __name__ == "__main__":
    app.run(debug=True)

