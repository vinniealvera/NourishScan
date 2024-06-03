
from . import *
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key = True, autoincrement = True)
    dateCreation = Column(Date, default = datetime.date.today() )
    email = Column(String(120), unique = True, nullable = False)
    username = Column(String(80), nullable = False)
    password = Column(String(32), nullable = False)
    profile_picture = Column(String(255), unique = True, nullable = True)
    country = Column(String(69), nullable=True)
    DOB = Column(Date, nullable = True)

    user_history = relationship("UserHistory", back_populates="users" )
    def __init__(self, username, email, password, profile_picture, country, DOB):
        self.username = username
        self.password = password
        self.email = email
        self.profile_picture = profile_picture
        self.country = country
        self.DOB = DOB
    


Base.metadata.create_all(engine)