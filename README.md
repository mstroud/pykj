# PyKJ
Python/Flask Karaoke Jockey (KJ) HTML5-based CDG+MP3 media player and database browser

CDG+MP3 HTML5 player: https://github.com/RadRootLLC/cdgraphics

Sortable, paginated table: https://github.com/ravid7000/table-sortable

Sample CDG+MP3s can be found: https://www.soundchoice.com/free-test-file/

## Instructions

### Installation
```
$ python3 -m venv venv
$ source venv/bin/activate
$ pip3 install -r requirements.txt
```

### Configure
Update configuration parameters (e.g., KARAOKE_MEDIA_ROOT) for your installation:

#### app/config/\_\_init__.py
```
class Config(object):
    DEBUG = True
    DEVELOPMENT = True
    SECRET_KEY = 'do-i-really-need-this'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///testing.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    KARAOKE_MEDIA_ROOT = "/path/to/app/static/media"
```

#### app/\_\_init__.py
```
app = Flask(__name__)
app.config.from_object(Config)
```

### Initialize a SQLite3 development database 
```
$ setenv FLASK_ENV development
$ sqlite3 app/testing.db < schema.sql
$ python3 import_db.py songs_by_artist.csv
```

### Run app in development mode
```
$ FLASK_ENV=development flask run
```

Visit http://localhost:5000
