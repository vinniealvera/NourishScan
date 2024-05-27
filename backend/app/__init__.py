# -*- coding: utf-8 -*-
# Coded By Kuduxaaa

import os
import config

from flask import (
    Flask, 
    request,
    render_template,
    send_from_directory,
    abort
)
from sqlalchemy import create_engine, update
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from flask_restful import Api
from sqlalchemy.exc import PendingRollbackError, IntegrityError


DB_PORT = 3306
DB_HOST = 'localhost'
DB_USER = 'root'
#isi password mysql
DB_PASS = ''
#buat database nourishscan
DB_NAME = 'nourishscan'

app = Flask(__name__, 
            template_folder='views',
            static_folder='public')

app.config.from_object(config.DevelopmentConfig)

api_router = Api(app, prefix='/api/v1')  # API Initialization

SQLALCHEMY_DATABASE_URI = f'mysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}'

engine = create_engine(SQLALCHEMY_DATABASE_URI)

Session = sessionmaker(bind=engine)

session = Session()
Base = declarative_base()
Base.metadata.create_all(engine)


"""
404 Page not found error default handler
"""
@app.errorhandler(404)
def page_not_found(e):
    return "Error"



"""
Controllers and API Resources import
and register blueprints and resources 
"""

from app.controllers import main
from app.api import resources  

api_router.add_resource(resources.Example, '/')

# Register Blueprints
app.register_blueprint(main.bp)
