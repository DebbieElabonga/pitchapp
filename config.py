import os

class Config:

    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://hamisi:1995@localhost/pitch'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    UPLOADED_PHOTOS_DEST ='app/static/photos'

    
class ProdConfig(Config):
    pass


class DevConfig(Config):
    DEBUG = True

config_options = {
  'development':DevConfig,
  'production':ProdConfig
}