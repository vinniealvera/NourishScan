
from app import db, Base, engine
from sqlalchemy import Integer, Date, ForeignKey, Column
import datetime

class FoodLog(Base):
    __tablename__ = 'foodlog'

    id = Column(Integer, primary_key = True, autoincrement = True)
    foodID = Column(Integer, ForeignKey("food.id", ondelete="CASCADE"))
    userID = Column(Integer, ForeignKey("user.id", ondelete="CASCADE"))
    dateEaten = Column(Date, nullable = False)

    def __init__(self, foodID, userID, dateEaten):
        self.foodID = foodID
        self.userID = userID
        self.dateEaten = datetime.date.today()
 
    def __repr__(self):
        return '<foodlog %r>' % self.id

Base.metadata.create_all(engine)