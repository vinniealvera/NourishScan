from app import *
from app.models.users import User


user = None

def update(User, args):
    
    if not isinstance(user, User) :
        return "Somethings wrong.."

    user = User

    updates = {
    'username': args.get('username'),
    'password': args.get('password'),
    'email': args.get('email'),
    'profile_picture' : args.get('profile_picture'),
    'DOB' : args.get('DOB')
    }

    for key, value in updates.items():
        if value is None:
            continue

        if isinstance(value, IOBase) :
            filename = update_profile_pic(value)
            setattr(user,key, filename)
            
        else :
            setattr(user, key, value)
    

    session.commit()

def retrive_user_data(User) :

    user = User

    if not isinstance(user, User) :
        return "Somethings wrong.."
    
    return {
        'username': user.username,
        'password': user.password,
        'email' : user.email,
        'profile_picture' : user.profile_picture,
        'DOB' : user.DOB
    }


def generate_file_name(id) :
    return f"{uuid.uuid4.hex}_{time.time()}"

def update_profile_pic(file):

    profile_path = app.config['PROFILE']
    profile_picture = user.profile_picture

    if profile_picture is not None :
        os.remove(os.path.join(profile_path, profile_picture))

    filename = generate_file_name()
    path = os.path.join(profile_path, filename)

    try :
        file.save(path)
    except Exception as err :
        return None
    
    return filename


def retrieve_user(user_id) :

    user = session.query(User).filter_by(id=user_id).first()

    if user is None :
        return {"msg" : "Somethings Wrong !"}
    return user 
