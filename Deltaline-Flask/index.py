from flask import Flask
from markupsafe import escape
from flask import render_template

app = Flask(__name__)

@app.route("/")
@app.route('/<name>')
def hello(name=None):
    return render_template('index.html', name=name)
"This is an among us meme that I made! Try it out. When the imposter is sus?!?!??!?!? Dun dun dun dun dun dun dun, du-du-dun *boom boom* dun dun dun dun dun dun dun, du-du-du du-du-du dun"