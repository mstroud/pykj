from app import app, db
from flask import render_template, request, redirect, url_for, send_from_directory, jsonify
from app.models import CdgMp3Pair

@app.route('/')
def home():
    """Render website's home page."""
    return render_template('home.html')

@app.route('/play/<id>')
def play(id=43900):
    """Render the player"""
    p = CdgMp3Pair.query.get(id)
    return render_template('play.html', id=id, name=p.relpath_basename)

@app.route('/search', methods=['POST', 'GET'])
def search():
    limit = request.args.get('l',150)
    query = '%'+request.args.get('q',' ')+'%'
    qf = CdgMp3Pair.query.filter(CdgMp3Pair.relpath_basename.like(query)).limit(limit)
    results = [{'relpath_basename': "<a href=\"{}\">{}</a>".format(url_for('play',id=i.id),i.relpath_basename)} for i in qf ]
    columns = {
        'relpath_basename': "Results"
    }
    return jsonify({'columns':columns, 'results': results})

@app.route('/media/<id>.<ext>')
def send_mp3cdg_file(id,ext):
    """Send MP3+CDG files"""
    cdgmp3obj = db.session.query(CdgMp3Pair).filter(CdgMp3Pair.id == id )[0]
    if cdgmp3obj is not None and \
        ( ext == 'mp3' or ext == 'cdg' ):
        filename = "{:s}.{:s}".format(cdgmp3obj.relpath_basename,ext)
        print(app.config['KARAOKE_MEDIA_ROOT'],filename)
        return send_from_directory(app.config['KARAOKE_MEDIA_ROOT'],filename)
    else:
        return page_not_found(None)

@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=600'
    return response

@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404
