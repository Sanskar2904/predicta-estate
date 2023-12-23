from flask import Flask, request, jsonify
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def api_info():
    """
    Get information about Predicta Estate API.
    """
    info = {
        'title': 'Predicta Estate API',
        'description': 'API for predicting real estate prices',
        'endpoints': {
            'getlocation': '/getlocation',
            'getpredictedprice': {
                'endpoint': '/getpredictedprice',
                'method': 'POST',
                'description': 'Get the predicted price for a real estate property'
            }
        }
    }
    return jsonify(info)


@app.route('/getlocation', methods=['GET'])
def get_location():
    """
    Get available locations for real estate properties.
    """
    response = jsonify({'location': util.getlocations()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/getpredictedprice', methods=['POST'])
def get_predicted_price():
    """
    Get the predicted price for a real estate property.
    """
    data = request.get_json()
    total_sqft = float(data.get('total_sqft', 0))
    bath = int(data.get('bath', 0))
    bhk = int(data.get('bhk', 0))
    location = data.get('location', '')

    estimated_price = util.getpredictedprice(total_sqft, bath, bhk, location)

    response = jsonify({'estimated_price': estimated_price})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    print("Starting flask server for Predicta Estate")
    util.loadsavedartifacts()
    app.run()
