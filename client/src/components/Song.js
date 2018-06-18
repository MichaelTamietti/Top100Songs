import React from 'react';


const Song = ({ id, name, artist, album, genre, updateSong, deleteSong }) => (
  <div className="col-12 row">
    <div className="col-3">
      { name }
    </div>
    <div className="col-3">
      { artist }
    </div>
    <div className="col-3">
      { album }
    </div>
    <div className="col-2">
      { genre }
    </div>
    <div className="col-1" onClick={() => deleteSong(id)}>
      X
    </div>
  </div>
)

export default Song;


