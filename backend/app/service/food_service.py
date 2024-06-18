from . import *
import random
import google.generativeai as genai

def get_food(name):
    
    return session.query(Food).filter_by(name=name).first()

def get_description(name):

    genai.configure(api_key="AIzaSyCtcIxoaxJ89OSmj2kM08uGxmy2kRGMeuw")
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(f"Description of {name} and its benefit in 30 words")
    
    return response.text

def get_food_data_no_db(res) :

    lists = res.json().get('foods')
    result = dict()

    nutrients = nutrition_facts_data(lists[0]['nf_protein'],\
                                     lists[0]['nf_calories'],\
                                     lists[0]['nf_total_fat'],\
                                     lists[0]['nf_total_carbohydrate'] )
    
    result['name'] = lists[0]['food_name']
    result['nutrition'] = nutrients
    result['description'] = get_description(lists[0]['food_name'])
    result['img_link'] = lists[0]['photo']['thumb']
    return result

def get_food_data_db(food):
    result = dict()
    nutrients = nutrition_facts_data(food.nutrition_facts.protein,\
                                     food.nutrition_facts.calories,\
                                     food.nutrition_facts.fats,\
                                     food.nutrition_facts.carbs )
        
    result['name'] = food.name
    result['nutrition'] = nutrients
    result['description'] = food.description
    result['img_link'] = food.images

    return result

def food_data(food_name):

    food = session.query(Food).filter_by(name=food_name).first
    if food is None :
        return get_food_data_no_db
    
    else :
        return get_food_data_db(food)
    

def nutrition_facts_data(protein, calories, fat, carbs):
    nutrients = {
        "protein" : {"value" : "0.0", "unit" : "g"},
        "calories" : {"value" : '0.0', "unit" : "kcal"},
        "fat" : {"value" : "0.0", "unit" : "g"},
        "carbs" : {"value" : "0.0", "unit" : "g"},
    }
    nutrients["protein"]["value"] = protein
    nutrients["calories"]['value'] = calories
    nutrients["fat"]['value'] = fat
    nutrients["carbs"]['value'] = carbs

    return nutrients

def food_list() :
    rg = session.query(Food).count()
    lists = []
    randoms = unique_rand(1, rg, 2)
    for i in randoms :
        food = session.query(Food).filter_by(id=i).first()
        result = dict()
        result['name'] = food.name
        result['calories'] = food.nutrition_facts.calories
        result['image'] = food.images
        lists.append(result)

    return lists

    

def unique_rand(inicial, limit, total):

        data = []

        i = 0

        while i < total:
            number = random.randint(inicial, limit)
            if number not in data:
                data.append(number)
                i += 1

        return data
