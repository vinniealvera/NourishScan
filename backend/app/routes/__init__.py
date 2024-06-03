
from app import *
from app.service.predict_service import predict_result
from werkzeug.utils import secure_filename
from app.models import foods, nutrition_facts, user_history, users, categories
from app.service.food_service import *
from app.service.user_service import *
from app.service.history_service import *
import sys
import uuid

