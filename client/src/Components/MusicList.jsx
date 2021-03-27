import React from 'react';
import { MusicsList } from './style';

class MusicList extends React.Component {

  render() {
    return (
      <MusicsList>
        {
          this.props.search.map(el => {
            const artists = 
            (el.artists.length >= 2)
            ? el.artists.reduce((acc, ele) => `${acc.name}, ${ele.name}`)
            : el.artists[0].name;
            return (
              <div className="music" 
              onClick={() => this.props.handleClick(el.name, artists, el.album.images[0].url, el.uri )}>
              <img src={el.album.images[1].url} />
                <div>
                  <h3>{el.name}</h3>
                  <h5>{artists}</h5>
                </div>
              </div>
            )
          })
        }
      </MusicsList>
    )
  }
}

export default MusicList;
