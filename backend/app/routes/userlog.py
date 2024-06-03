
from . import *
import flask
bp = Blueprint('userlog', __name__, url_prefix='/history')


@bp.route("/")
def userlog():

    print(datetime.datetime.today())
    user = retrieve_user(flask.session["user"])
    log_lists = get_user_log(user=user)
    return jsonify(log_lists)