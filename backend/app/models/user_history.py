from . import *

class UserHistory(Base):
    __tablename__ = 'user_history'

    id = Column(Integer, primary_key = True, autoincrement = True)
    foodID = Column(Integer, ForeignKey("food.id", ondelete="CASCADE"))
    userID = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"))
    dateEaten = Column(DateTime, nullable = False)

    users = relationship("User", back_populates="user_history")
    food = relationship("Food", back_populates="user_history")

    def __init__(self, food, user):
        self.food = food
        self.users = user
        self.dateEaten = datetime.datetime.today()


Base.metadata.create_all(engine)