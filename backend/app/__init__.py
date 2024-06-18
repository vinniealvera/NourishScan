import os
import config
from flask import (
    Flask,
    Blueprint,
    abort,
    request,
    Response,
    url_for,
    json,
    jsonify
)
import mysql.connector
from sqlalchemy import create_engine, update
from sqlalchemy.orm import sessionmaker, declarative_base
from io import (
    FileIO,
    IOBase
)

import uuid, time, datetime
from flask_caching import Cache
from flask_cors import CORS

DB_PORT = 3306
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASS = 'GOATNALDO'
DB_NAME = 'nourishscan'

def initialize_database():
    try:
   
        connection = mysql.connector.connect(host=DB_HOST, user=DB_USER, password=DB_PASS)
        cursor = connection.cursor()


        cursor.execute(f"SHOW DATABASES LIKE '{DB_NAME}'")
        result = cursor.fetchone()
        if result:
            print(f"Database '{DB_NAME}' already exists. Skipping initialization.")
            return

     
        cursor.execute(f"CREATE DATABASE {DB_NAME}")
        print(f"Database '{DB_NAME}' created successfully.")


        cursor.execute(f"USE {DB_NAME}")


        sql_dir = os.path.join(os.path.dirname(__file__), '..', 'database')


        sql_files = ['nourishscan_categories.sql', 'nourishscan_food.sql', 'nourishscan_nutrition_facts.sql', 'nourishscan_user_history.sql', 'nourishscan_users.sql']

        for sql_file in sql_files:
            file_path = os.path.join(sql_dir, sql_file)
            with open(file_path, 'r') as file:
                sql_script = file.read()
               
                statements = sql_script.split(';')
                for statement in statements:
                    if statement.strip():
                        cursor.execute(statement)

        connection.commit()
        cursor.close()
        connection.close()
        print("Database initialization complete.")

    except mysql.connector.Error as err:
        print(f"Error: {err}")


initialize_database()

SQLALCHEMY_DATABASE_URI = f'mysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
engine = create_engine(SQLALCHEMY_DATABASE_URI)

Session = sessionmaker(bind=engine)
session = Session()
    
Base = declarative_base()

app = Flask(__name__)

app.config.from_object(config.DevelopmentConfig)
app.config["DEBUG"] = True
app.config["PROFILE_PICTURE_PATH"] = \
f"{os.getcwd()}/app/static/profile_pictures"
app.config["FOOD_IMAGE_PATH"] = f"{os.getcwd()}\\app\\static\\food_images"
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


cache = Cache()
cache.init_app(app, config={'CACHE_TYPE': 'SimpleCache'})


# IMPORTING ROUTES FOR BLUEPRINT MUST BE AT THE BOTTOM
# OR YOU'LL GET THIS SHIT = NameError: name 'Base' is not defined

from app.routes import (
    predict,
    userlog,
    foodinfo

)
app.register_blueprint(predict.bp)
app.register_blueprint(userlog.bp)
app.register_blueprint(foodinfo.bp)

db_config = {
    'host': DB_HOST,
    'user': DB_NAME,
    'password': DB_PASS,
    'database': DB_NAME  # Your database name
}

# Function to initialize database
