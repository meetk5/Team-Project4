
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





if __name__ == '__main__':
    app.run(debug=True)