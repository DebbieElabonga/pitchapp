from flask import render_template
from . import main

# Views
@main.route('/')
def index():
    title = "home of pitches"

    return render_template('index.html', title)