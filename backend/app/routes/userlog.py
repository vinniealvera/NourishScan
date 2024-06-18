
from . import *
import flask
bp = Blueprint('userlog', __name__, url_prefix='/history')


@bp.route("/")
def userlog():

    flask.session["user"] = 1

    user = retrieve_user(flask.session["user"])
    log_lists = get_user_log(user=user)
    return jsonify(log_lists)

@bp.route("/statistics")
def stats():

    flask.session["user"] = 1

    user = retrieve_user(flask.session["user"])
    statistics = get_stats(user)
    return jsonify(statistics)

@bp.route("/p")
def main():

    categori = session.query(Category).filter_by(name="Vegetable").first()

    session.add(Food("garlic", "Garlic (Allium sativum) is an herb related to onion, leeks, and chives. It is commonly used for conditions related to the heart and blood system", "https://veggies.my/cdn/shop/products/GarlicCloves.jpg?v=1585472534", None, categori, NutritionFacts(calories=4, fats=0, protein=0, carbs=1, sugar=0)))
    session.commit()