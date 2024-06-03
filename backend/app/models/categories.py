from . import *

class Category(Base):

    __tablename__ = 'categories'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(15), unique=True)

    food = relationship('Food', back_populates='categories')

    def __init__(self,name) :
        self.name = name


Base.metadata.create_all(engine)