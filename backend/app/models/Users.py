from sqlalchemy import Column, Integer, Date, String
# from sqlalchemy.ext.declarative import declarative_base
from app import Base, engine
import datetime


# Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key = True, autoincrement = True)
    dateCreation = Column(Date, default = datetime.date.today() )
    email = Column(String(120), unique = True, nullable = False)
    username = Column(String(80), nullable = False)
    password = Column(String(32), nullable = False)
    profile_picture = Column(String(255), unique = True, nullable = True)
    DOB = Column(Date, nullable = True)

    def __init__(self, username, email, password, profile_picture, DOB):
        self.username = username
        self.password = password
        self.email = email
        self.profile_picture = profile_picture
        self.DOB = DOB
    
   

    def __repr__(self):
        return f"id : {self.id}"
    


    

