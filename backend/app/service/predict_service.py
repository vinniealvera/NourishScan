import sys
sys.path.append("...")
from script.predict_result import predict

from . import *
from app.service.user_service import *
import requests
import json

def predict_result(Image, user):


    output = predict(Image)
    
    Food = get_food(output)
  
    if isinstance(output, Exception) or (output == "" or output == " "):
        return False

    if Food == None :
        return False
            
    new_user_log = UserHistory(Food, retrieve_user(user))
    session.add(new_user_log)
    session.commit()
            
    return get_food_data_db(food=Food)

       










































# def predict_result(Image) :
    
#     api_url = 'https://trackapi.nutritionix.com/v2/natural/nutrients'

#     predict_output = predict(Image)

#     response = requests.post(api_url, headers={\
#             'Content-Type': 'application/json',
#             'x-app-id': '199da47a',
#             'x-app-key': 'a1c9f5415485c951dae208f5d419dab4'
#         }, data=json.dumps({'query' : predict_output}))
    
#     if response.status_code != requests.codes.ok:
#         return Exception("Connection to API failed !")
    
#     result = None


#     retrieve_no_db = get_food_data(res=response)
#     return "Smthng"
    