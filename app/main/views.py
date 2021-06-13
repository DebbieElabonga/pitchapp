from app.models import Pitch
from flask import render_template
from . import main
from flask_login import login_required
from .. import db
from .forms import UpdateProfile,UploadPitch,CommentsForm

# Views
@main.route('/')
def index():
    title = "home of pitches"

    return render_template('index.html',title= title)

@main.route('/pitch')
def pitch():
    pitch = Pitch.query.filter_by().first()

    return render_template('pitch.html', pitch= pitch)