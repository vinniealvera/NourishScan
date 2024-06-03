from . import *


class Food(Base):
    __tablename__ = 'food'

    id = Column(Integer, primary_key = True, autoincrement = True)
    name = Column(String(50), nullable= False)
    description = Column(Text, nullable=True)
    images = Column(String(255), nullable = True)
    ingredients = Column(String(255), nullable = True)
    category_id = Column(Integer, ForeignKey('categories.id'))
    
    user_history = relationship("UserHistory", back_populates="food")
    nutrition_facts = relationship("NutritionFacts", uselist=False, back_populates="food")
    categories = relationship("Category", back_populates="food")
    
   

    def __init__(self, name, description, images, ingredients, categories, nutrition_facts):
        self.name = name
        self.description = description
        self.images = images
        self.ingredients = ingredients
        self.categories = categories
        self.nutrition_facts = nutrition_facts
    
    
Base.metadata.create_all(engine)