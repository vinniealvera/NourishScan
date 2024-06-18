from . import *
import requests
import google.generativeai as genai
from flask import session as Session
from flask_cors import CORS
from io import BytesIO
import base64
from PIL import Image
# ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'} 

bp = Blueprint('predict', __name__, url_prefix='/predict')


# def allowed_file(filename):
#     extention = filename[::-1].split('.')[0][::-1]
#     return '.' + extention if extention in ALLOWED_EXTENSIONS else False



@bp.route('/upload', methods=["POST"])


def upload():
    UPLOAD_FOLDER = app.config["FOOD_IMAGE_PATH"]

    if request.method == "POST":
        raw_data = request.get_data().decode('utf-8')
        base64_str = raw_data.split(",")[-1]
        file_bytes = base64.b64decode(base64_str)
        file = BytesIO(file_bytes)
        image = Image.open(file)

        cache.set("imagePath" , os.path.join(UPLOAD_FOLDER,\
        f"{str(uuid.uuid4())}.jpeg"))
        
        image.save(cache.get("imagePath"), format="JPEG")
        return jsonify({"msg" : "Upload Sucessful"}),200

    else :
        return abort(404)
 


@bp.route('/result', methods=["GET"])

def result():

    Session["user"] = 1

    if cache.get("imagePath") == None :
        return abort(404)
    
    output = predict_result(Image=cache.get("imagePath"), user=Session["user"])

    cache.clear()
    
    if output :
        return jsonify(output),200
    else :
        return abort(404)

