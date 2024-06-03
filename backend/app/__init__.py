import os
import config
from flask import (
    Flask,
    Blueprint,

    request,
    Response,
    url_for,
    json,
    jsonify
)

from sqlalchemy import create_engine, update
from sqlalchemy.orm import sessionmaker, declarative_base
from io import (
    FileIO,
    IOBase
)

import uuid, time, datetime
from flask_caching import Cache


DB_PORT = 3306
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASS = ''
DB_NAME = 'nourishscan'

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
    userlog
)
app.register_blueprint(predict.bp)
app.register_blueprint(userlog.bp)
        

