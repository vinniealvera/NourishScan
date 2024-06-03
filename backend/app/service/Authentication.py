from . import *
from bcrypt import checkpw, hashpw
def register(username , email, password) :
 
    try:
        new_user = User(username=username,
                        email=email,
                        password=hashpw(password),
                        profile_picture=None,
                        DOB=None
                        )
        session.add(new_user)
        session.commit()
        

    except:
        session.rollback()
        return Exception("User Already Registered")
    
def login(username, password) :
    
    user = session.query(User).filter_by(username=username).first()
    
    if user is None :
        return ValueError("User Not Found")

    if not checkpw(password, user.password) :
     
        return Exception("Wrong Credentials")
    
    return user.id 



