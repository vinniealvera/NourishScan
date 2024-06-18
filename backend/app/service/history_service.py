from . import *

def get_stats(user) :


        
    stats = dict()
    stats["protein"] = 0
    stats["calories"] = 0
    stats["carbs"] = 0
    stats["fat"] = 0
    stats["sugar"] = 0
    count = 0
    db_result = session.query(UserHistory).filter_by(userID=user.id).all()


    if session.query(UserHistory).count() == 0 :
        return stats
    
    for i , list in enumerate(db_result) :

        count += 1
        nutritions = list.food.nutrition_facts
        stats["protein"] += nutritions.protein
        stats["calories"] += nutritions.calories
        stats["carbs"] += nutritions.carbs
        stats["fat"] += nutritions.fats
        stats["sugar"] += nutritions.sugar
     
    stats["protein"] /= count
    stats["calories"] /= count
    stats["carbs"] /= count
    stats["fat"] /= count
    stats["sugar"] /= count
    
    return stats

def get_user_log(user) :

    history_list = []

    db_result = session.query(UserHistory).filter_by(userID=user.id).all()

    if db_result == None :
        return history_list
    
    for i , list in enumerate(db_result) :

        food = list.food.name
        nutritions = list.food.nutrition_facts

        records = dict()
        records["food"] = food
        # records["nutritions"] = nutrition_facts_data(protein=nutritions.protein,\
        #                                              calories=nutritions.calories,\
        #                                              carbs=nutritions.carbs,\
        #                                              fat=nutritions.fats
        #                                              )
        records["Datetime"] = list.dateEaten
        records["image"] = list.food.images
        history_list.append(records)
    
    return history_list[::-1]