from app import create_app,db
from flask_script import Manager,Server
from app.models import User,Pitch, Comment, Votes



# Creating app instance
app = create_app('development')

manager = Manager(app)
manager.add_command('server',Server)

@manager.shell
def make_shell_context():
    return dict(app = app,db = db,User = User ,Pitch= Pitch , Comment= Comment, Votes = Votes)


if __name__ == '__main__':
    manager.run()


