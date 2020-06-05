from app import db

class Artist(db.Model):
    __tablename__ = 'artists'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(127), unique=True)

    def __init__(self, id, name):
        self.id = id
        self.name = name

    def __repr__(self):
        return '<Artist %r>' % self.name

class Track(db.Model):
    __tablename__ = 'tracks'
    id = db.Column(db.Integer, primary_key = True)
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    name = db.Column(db.String(127), unique=True)

    def __init__(self, id, artist_id, name):
        self.id = id
        self.artist_id = artist_id
        self.name = name

    def __repr__(self):
        return '<Track %r>' % self.name

class Collection(db.Model):
    __tablename__ = 'collections'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(127), unique=True)

    def __init__(self, id, name):
        self.id = id
        self.name = name

    def __repr__(self):
        return '<Collection %r>' % self.name        

class CdgMp3Pair(db.Model):
    __tablename__ = 'cdg_mp3_pairs'
    id = db.Column(db.Integer, primary_key = True)
    track_id = db.Column(db.Integer, db.ForeignKey('tracks.id'), nullable=False)
    collection_id = db.Column(db.Integer, db.ForeignKey('collections.id'), nullable=True)
    relpath_basename = db.Column(db.String(512), unique=True)

    def __init__(self, id, track_id, collection_id, relpath_basename):
        self.id = id
        self.track_id = track_id
        self.collection_id = collection_id
        self.relpath_basename = relpath_basename

    def to_json(self):
        return {
            'id': self.id,
            'relpath_basename': self.relpath_basename
        }

    def __repr__(self):
        return '<CDG+MP3 Pair %r>' % self.relpath_basename