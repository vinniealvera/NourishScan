from app import db, Base, engine
from sqlalchemy import ForeignKey, Column, Integer
class NutritionFacts(Base) :

    id = Column(Integer, primary_key = True, autoincrement = True)
    userID = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    calories = Column(Integer, nullable = False)
    protein = Column(Integer, nullable = False)
    carbs = Column(Integer, nullable = False)
    fats = Column(Integer, nullable = False)
    sugar = Column(Integer, nullable = False)


    def __init__(self, id, userID, calories, protein, carbs, fats, sugar):
        self.id = id
        self.userID = userID
        self.calories = calories
        self.protein = protein
        self.carbs = carbs
        self.fats = fats
        self.sugar = sugar

Base.metadata.create_all(engine)