from . import *
import flask
bp = Blueprint('food', __name__, url_prefix='/food')


@bp.route("/")
def get_food_list():

    return jsonify(food_list())

