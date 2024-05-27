from app import db, Base, engine
from sqlalchemy import Integer, String, Text, Column

class Food(Base):
    __tablename__ = 'food'

    id = Column(Integer, primary_key = True, autoincrement = True)
    name = Column(String, nullable= False)
    description = Column(Text, nullable=True)
    images = Column(String, nullable = True)
    ingredients = Column(String, nullable = False)

    def __repr__(self):
        return '<foodlog %r>' % self.id

Base.metadata.create_all(engine)