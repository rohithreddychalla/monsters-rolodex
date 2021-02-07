from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('index.html')
@app.route('/index2.html')
def hi():
    return render_template('index2.html')
@app.route('/index3.html')
def hey():
    return render_template('index3.html')
