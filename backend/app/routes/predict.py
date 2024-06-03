from . import *
import requests
import google.generativeai as genai
from flask import session as Session
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'} 

bp = Blueprint('predict', __name__, url_prefix='/predict')


def allowed_file(filename):
    extention = filename[::-1].split('.')[0][::-1]
    return '.' + extention if extention in ALLOWED_EXTENSIONS else False


@bp.route('/upload', methods=["POST", "GET"])

def upload():
    UPLOAD_FOLDER = app.config["FOOD_IMAGE_PATH"]
    
    if request.method == "POST" :
        ImageFile = request.files.get("Image")

        if ImageFile.filename == '' or ImageFile is None :
            return jsonify("msg : No File Recieved !")
        
        if ImageFile and allowed_file(ImageFile.filename) :

            with app.app_context() :
                cache.set("imagePath" , os.path.join(UPLOAD_FOLDER,\
                f"{str(uuid.uuid4())}{allowed_file(ImageFile.filename)}"))
            
            ImageFile.save(cache.get("imagePath"))
           
        return jsonify("msg : Unsupported Extention !"),404
    
    return jsonify("Hello !")


@bp.route('/result', methods=["GET"])

def result():

    output = predict_result(Image=cache.get("imagePath"), user=Session["user"])

    cache.clear()

    return jsonify(output)