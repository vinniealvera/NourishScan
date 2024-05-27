from app.service import *


def register(username , email, password) :
 
    try:
        new_user = User(username=username,
                        email=email,
                        password=password,
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

    if user.password != password :
     
        return Exception("Wrong Credentials")
    
    return user.id 


def update(id, args):

    user = session.query(User).filter_by(id=id).first()
  
    if user is None :
        return Exception("Something Wrong !")

    updates = {
    'username': args.get('username'),
    'password': args.get('password'),
    'email': args.get('email'),
    'profile_picture' : args.get('profile_picture'),
    'DOB' : args.get('DOB')
    }

    for key, value in updates.items():
        if value is not None:
            setattr(user, key, value)
    

    session.commit()

