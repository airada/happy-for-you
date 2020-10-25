from chatbot.chat import Chatbot
from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)
app.static_folder = 'static'

@app.route('/success/<name>')
def success(name):
    chatbot = Chatbot()
    return chatbot.response(name)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/chat',methods = ['POST', 'GET'])
def chat():
    if request.method == 'GET':
        user_msg = request.args.get('msg')
        chatbot = Chatbot()
        return str(chatbot.response(str(user_msg)))


if __name__ == "__main__":
    app.run(debug=True) 