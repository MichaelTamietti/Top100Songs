import React from 'react';

class SongForm extends React.Component {
    state = { song: '' }

    handleChange = (e) => {
      this.setState({ song: e.target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addSong(this.state.song);
      this.setState({ song: '' })
    }

  render() {
    return (
      <form>
        <label>
          *Song Name:
          <input
              placeholder="Add A Song"
              //required
              value={this.state.song.name}
              onChange={this.handleChange}
          />
        </label>
        <label>
          *Song Artist:
          <input
              placeholder="Add Artist"
              //required
              value={this.state.song.artist}
              onChange={this.handleChange}
          />
        </label>
        <label>
          Song Album:
          <input
              placeholder="Add Album"
              value={this.state.song.album}
              onChange={this.handleChange}
          />
        </label>
        <label>
          *Song Genre:
          <input
              placeholder="Add Genre"
              // required
              value={this.state.song.genre}
              onChange={this.handleChange}
          />
        </label>
          <br />
          <br />
          <p>*'s Are Required*</p>
        <button onSubmit={this.handleSubmit}>Submit Song</button>
      </form>
          
    )
  }


}
// song has a name, artist, album, genre, length

export default SongForm;

