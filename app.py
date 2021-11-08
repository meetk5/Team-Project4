
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
#----- import config

from flask import Flask, jsonify, render_template, redirect

# Database Setup
# database = 'restaurant_db'
# engine = create_engine(f'postgresql://postgres:{config.password}@localhost:{config.port}/{database}')

# reflect an existing database into a new model
# Base = automap_base()
# reflect the tables
# Base.prepare(engine, reflect=True)

# Save reference to the table
#----Restaurant_info = Base.classes.restaurants


# Flask Setup
app = Flask(__name__)

# Flask Routes

@app.route("/")
def home():
    print("rendering homepage")
    # Return template and data
    return render_template("index.html")


@app.route("/followers")
def followers():
    return render_template("followers.html")


@app.route("/network")
def othergraphs():
    return render_template("network.html")

@app.route("/vis1")
def vis():
    print("rendering visualizations")
    # Return template and data
    return render_template("vis1.html")


@app.route("/vis2")
def vis2():
    print("rendering visualizations")
    # Return template and data
    return render_template("vis2.html")


@app.route("/team")
def team():
    print("rendering team")
    # Return template and data
    return render_template("team.html")



if __name__ == '__main__':
    app.run(debug=True)