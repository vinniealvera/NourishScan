from . import *

class NutritionFacts(Base) :

    __tablename__ = 'nutrition_facts'

    id = Column(Integer, primary_key=True, autoincrement=True)
    food_id = Column(Integer, ForeignKey('food.id'), unique=True)
    calories = Column(Integer, nullable=False)
    protein = Column(Integer, nullable=False)
    carbs = Column(Integer, nullable=False)
    fats = Column(Integer, nullable=False)
    sugar = Column(Integer, nullable=False)

    food = relationship('Food', back_populates='nutrition_facts')
    
    def __init__(self, calories, protein, carbs, fats, sugar):
        self.calories = calories
        self.protein = protein
        self.carbs = carbs
        self.fats = fats
        self.sugar = sugar
    


Base.metadata.create_all(engine)