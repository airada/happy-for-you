from chatbot.chat import Chatbot
from flask import Flask, render_template, request, redirect, url_for
from flask_cors import CORS, cross_origin
import logging

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.static_folder = 'static'
app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

@app.route('/success/<name>')
def success(name):
    chatbot = Chatbot()
    return chatbot.response(name)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/chat',methods = ['GET'])
@cross_origin()
def chat():
    if request.method == 'GET':
        msg = request.args.get('msg')
        chatbot = Chatbot()
        return str(chatbot.response(msg))

if __name__ == "__main__":
    app.run() 
