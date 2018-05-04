from flask import Flask, request, session
from flask_cors import CORS, cross_origin
import os
import sys
import json


PORT = 1334
app = Flask(__name__)
CORS(app)
app_root = app.root_path
app.config['DEBUG'] = False


@app.after_request
def allow_cross_domain(response):
    """Hook to set up response headers."""
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'content-type'
    return response


@app.route('/')
def index():
    return 'You have just found AskOski.'


@app.route('/nextcourse/predict', methods=['POST'])
def nextcourse():
    """ Get the next course predict from lstm_model.predict() """
    return 'predict course list after filter'


@app.route('/aprcourse/get', methods=['POST'])
def aprcourse():
    """ The courses the student should take from db of Academic Plan Review (APR) """
    courses = []
    for i in range(10):
        course = {
            'id': i,
            'name': 'course' + str(i)
        }
        courses.append(course)
    
    status = 'OK'
    if len(courses) == 0:
        status = 'Failed'
    response_back_to_frontend = {
        'status': status, 
        'result': courses,
    }
    # return json.dumps(response_back_to_frontend)
    # return 'apr course list after filter'
    return json.dumps(courses)

# TODO other services

def main(arguments):
    app.run(host='0.0.0.0', port=PORT, threaded=True)

if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
