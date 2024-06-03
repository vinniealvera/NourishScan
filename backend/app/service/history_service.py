from . import *

def get_user_log(user) :

    history_list = []

    db_result = session.query(UserHistory).filter_by(userID=user.id).all()

    for i , list in enumerate(db_result) :

        food = list.food.name
        nutritions = list.food.nutrition_facts

        records = dict()
        records["food"] = food
        records["nutritions"] = nutrition_facts_data(protein=nutritions.protein,\
                                                     calories=nutritions.calories,\
                                                     carbs=nutritions.carbs,\
                                                     fat=nutritions.fats
                                                     )
        records["Datetime"] = list.dateEaten
        history_list.append(records)
    
    return history_list