from flask import (
    Blueprint, json, jsonify, render_template
)

from app.service.Authentication import update, login, register
from app import Base, session
from app.models.Users import User

import datetime
from sqlalchemy.sql.expression import FromClause, select


bp = Blueprint('main', __name__)

@bp.route('/', methods=['GET', 'POST'])
def index():
    #register
    # print(register("Antony", "antony@vk.uk", "antony123"))
    # print([tuple(users) for users in session.query(User.__table__.columns)])


   
    # password = '1i2033'
    # status = login('Antony', "antony123")
    # #output Exception when invalid, output Class if correct
    # print(status) 


    # #update 

    # #fill list_update with certain field that needs to be updated
    # #list_update = {
    # #'username': '..',
    # #'password': '..',
    # #'email': '..',
    # #'profile_picture' : '..',
    # # 'DOB' : '..',
  
 
    args = {
    'username': "new_user",
    'password': "new_pass",
    'email': None,  # This won't update since it's None
    'profile_picture': "new_pic.jpg",
    'DOB': "1995-12-31"
}
    print(update(1, args))

    return jsonify([tuple(users) for users in session.query(User.__table__.columns)])


