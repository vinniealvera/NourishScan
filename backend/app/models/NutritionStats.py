from app import Base, engine
from sqlalchemy import ForeignKey, Column, Integer, String, DateTime, BigInteger

class NutritionStat(Base):
    __tablename__ = 'NutritionStat'
    id = Column(String(255), primary_key=True)
    userID = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    date = Column(DateTime, nullable=False)
    caloriestat = Column(BigInteger, nullable=False)
    proteinstat = Column(BigInteger, nullable=False)
    sugarstat = Column(BigInteger, nullable=False)
    fatstat = Column(BigInteger, nullable=False)

    def __init__(self, id, userID, date, caloriestat, proteinstat, sugarstat, fatstat):
        self.id = id
        self.userID = userID
        self.date = date
        self.caloriestat = caloriestat
        self.proteinstat = proteinstat
        self.sugarstat = sugarstat
        self.fatstat = fatstat

    def __repr__(self):
        return f"<NutritionStat %r>" % self.id

Base.metadata.create_all(engine)