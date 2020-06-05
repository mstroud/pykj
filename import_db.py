import sys
import csv
import re

from app import db, app
from app.models import Artist, Track, Collection, CdgMp3Pair

db.init_app(app)

with open(sys.argv[1], newline='', encoding="latin-1") as csvfile:
    print("\nPre-processing records...")
    
    artists = dict()
    artist_tracks = dict()
    collections = dict()
    cdg_mp3_pairs = dict()
    p = re.compile(r'^([^\[]+)(\s*\[\s*([^\]]+)\])?')

    reader = csv.DictReader(csvfile)
    for row in reader:
        artist = row['Artist']
        title = row['Title']
        track = None
        collection = None
        cdg_mp3_pair = str(artist) + ' - ' + str(title)

        # Split titles
        m = p.match(title)
        if m is not None:
            track = str(m.group(1)).strip()
            collection = str(m.group(3)).strip()
        else:
            print(rdata)
            exit()

        # De-duplicate 'artist - track's
        artist_track = str(artist) + ' - ' + str(track)

        # Add uniques
        if artist not in artists:
            artists[artist] = len(artists)
            aobj = Artist(
                artists[artist],
                artist
            )
            db.session.add(aobj)

        if artist_track not in artist_tracks:
            artist_tracks[artist_track] = len(artist_tracks)
            tobj = Track(
                artist_tracks[artist_track],
                artists[artist],
                track
            )
            db.session.add(tobj)

        if collection not in collections:
            collections[collection] = len(collections)
            cobj = Collection(
                collections[collection],
                collection
            )
            db.session.add(cobj)

        if cdg_mp3_pair not in cdg_mp3_pairs:
            cdg_mp3_pairs[cdg_mp3_pair] = len(cdg_mp3_pairs)
            cmobj = CdgMp3Pair(
                cdg_mp3_pairs[cdg_mp3_pair],
                artist_tracks[artist_track],
                collections[collection],
                cdg_mp3_pair
            )
            db.session.add(cmobj)

        else:
            print("DUPLICATE: ", cdg_mp3_pair)

    db.session.commit()
    print("--")
    print("Unique Collections: {:d}".format(len(collections.keys())))
    print("{}".format(collections.keys()))
    print("Unique Artists: {:d}".format(len(artists.keys())))
    print("Unique Tracks: {:d}".format(len(artist_tracks.keys())))
    print("Unique Files: {:d}".format(len(cdg_mp3_pairs.keys())))
    