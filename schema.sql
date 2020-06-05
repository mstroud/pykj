DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
  id integer primary key autoincrement,
  name string not null
);

DROP TABLE IF EXISTS collections;
CREATE TABLE collections (
  id integer primary key autoincrement,
  name string not null
);

DROP TABLE IF EXISTS tracks;
CREATE TABLE tracks (
  id integer primary key autoincrement,
  artist_id integer not null,
  name string not null
);

DROP TABLE IF EXISTS cdg_mp3_pairs;
CREATE TABLE cdg_mp3_pairs (
  id integer primary key autoincrement,
  track_id integer not null,
  collection_id integer not null,
  relpath_basename string not null
);