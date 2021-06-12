from . import db
from datetime import datetime, timezone, time, timedelta,timezone


class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(255))
    email = db.Column(db.String(255))
    pass_secure = db.Column(db.String(255))
    profile_pic_path = db.Column(db.String(255))


    def __repr__(self):
       return f'User {self.username}'

class Pitch(db.Model):
    __tablename__ = 'pitch'
    id = db.Column(db.Integer,primary_key=True)
    pitch = db.Column(db.String(255))
    posted = db.Column(db.DateTime,default=datetime.utcnow)
    up_vote = db.Column(db.Integer)
    down_vote = db.Column(db.Integer)
    category_id = db.Column(db.Integer,db.ForeignKey('category.id'))
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"))

    def __repr__(self):
      return f'User {self.pitch}'

class Comment(db.Model):
    __tablename__='comments'
    id=db.Column(db.Integer,primary_key=True)
    comment=db.Column(db.String)
    posted=db.Column(db.DateTime,default=datetime.utcnow)
    user_id=db.Column(db.Integer,db.ForeignKey("users.id"))
    pitch_id=db.Column(db.Integer,db.ForeignKey('pitch.id'))


    def __repr__(self):
        return f"Comment ('{self.comment}','{self.user}')"


class Votes(db.Model):
    __tablename__='votes'

    id = db.Column(db. Integer, primary_key=True)
    vote = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    pitch_id = db.Column(db.Integer, db.ForeignKey("pitch.id"))
