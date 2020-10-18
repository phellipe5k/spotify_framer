import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Quadro from './Components/Quadro';
import './App.css';
import logo from './logo.png'



const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      search: '',
      loading: true,
      input: '',
      quadro: {
        name: 'Nome da Música',
        artists: 'Artista',
        image: 'https://i.pinimg.com/originals/6a/88/82/6a88827ea834c6942d7ed921721439af.jpg',
      },
      color: '#000',
      svg: `
      <svg width="640" height="160" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="0" y="0" width="400" height="100" fill="#ffffff"/>
<rect x="100.00" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="112.42" y="34.00" width="6.71" height="32.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="124.84" y="20.00" width="6.71" height="60.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="137.27" y="20.00" width="6.71" height="60.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="149.69" y="27.00" width="6.71" height="46.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="162.11" y="37.50" width="6.71" height="25.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="174.53" y="37.50" width="6.71" height="25.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="186.96" y="30.50" width="6.71" height="39.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="199.38" y="34.00" width="6.71" height="32.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="211.80" y="20.00" width="6.71" height="60.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="224.22" y="34.00" width="6.71" height="32.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="236.64" y="20.00" width="6.71" height="60.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="249.07" y="23.50" width="6.71" height="53.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="261.49" y="30.50" width="6.71" height="39.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="273.91" y="37.50" width="6.71" height="25.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="286.33" y="20.00" width="6.71" height="60.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="298.76" y="27.00" width="6.71" height="46.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="311.18" y="34.00" width="6.71" height="32.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="323.60" y="41.00" width="6.71" height="18.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="336.02" y="23.50" width="6.71" height="53.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="348.44" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="360.87" y="30.50" width="6.71" height="39.00" rx="3.36" ry="3.36" fill="#000000"/>
<rect x="373.29" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#000000"/>
<g transform="translate(20,20)"><path fill="#000000" d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0M43.73,43.2a1.85,1.85,0,0,0-.47-2.43,5,5,0,0,0-.48-.31,30.64,30.64,0,0,0-5.92-2.72,37.07,37.07,0,0,0-11.56-1.84c-1.33.07-2.67.12-4,.23a52.44,52.44,0,0,0-7.08,1.12,3.45,3.45,0,0,0-.54.16,1.83,1.83,0,0,0-1.11,2.08A1.79,1.79,0,0,0,14.37,41a4.29,4.29,0,0,0,.88-.12,48.93,48.93,0,0,1,8.66-1.15,35.33,35.33,0,0,1,6.75.37,28.29,28.29,0,0,1,10.25,3.61,4.77,4.77,0,0,0,.5.27,1.85,1.85,0,0,0,2.33-.74M47.41,35a2.34,2.34,0,0,0-.78-3.19l-.35-.21a35.72,35.72,0,0,0-7.38-3.3,45.39,45.39,0,0,0-15.7-2.13,41.19,41.19,0,0,0-7.39.92c-1,.22-2,.48-2.94.77A2.26,2.26,0,0,0,11.29,30a2.32,2.32,0,0,0,1.44,2.2,2.47,2.47,0,0,0,1.67,0,37,37,0,0,1,10.38-1.46,43,43,0,0,1,7.91.74,35.46,35.46,0,0,1,9.58,3.18c.66.34,1.3.72,1.95,1.08A2.33,2.33,0,0,0,47.41,35m.35-8.49A2.79,2.79,0,0,0,52,24.11c0-.2,0-.4-.08-.6a2.78,2.78,0,0,0-1.4-1.85,35.91,35.91,0,0,0-6.41-2.91,56.19,56.19,0,0,0-16.86-2.89,58.46,58.46,0,0,0-7,.21,48.31,48.31,0,0,0-6.52,1c-.87.2-1.73.42-2.58.7a2.73,2.73,0,0,0-1.85,2.68,2.79,2.79,0,0,0,2,2.61,2.9,2.9,0,0,0,1.6,0c.87-.23,1.75-.47,2.63-.66a45.52,45.52,0,0,1,7.26-.91,57.42,57.42,0,0,1,6.4,0,53.7,53.7,0,0,1,6.11.72,42.63,42.63,0,0,1,8.49,2.35,33.25,33.25,0,0,1,4,2"/></g>
</svg>`
    }
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {
    this.getNowPlaying(' ')
  }
  getNowPlaying(input){
    spotifyApi.search(input, ['track'])
      .then((response) => {
        this.setState({
          loading: false,
          search: response.tracks.items,
        });
      })
  }

  handleChange = ({ target }) => {
    this.setState({input: target.value})
    this.getNowPlaying(this.state.input)
  }

  handleClick = (name, artists,image, spotifycode) => {
    fetch(`https://scannables.scdn.co/uri/plain/svg/ffffff/black/640/${spotifycode}`)
    .then(re => re.text())
    .then(text => this.setState({svg: text}))
    console.log(this.state.svg)
    this.setState({
      quadro: {
        name,
        artists,
        image,
      }
    })
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    
    return (
      <div className="App">
        <Quadro info={this.state.quadro} color={this.state.color} svg={this.state.svg} />
        <div className="inputs-list">
          <img src={logo} width="600" />

          <div className="music-wrap">
        <a href='http://localhost:8888' target="_blank" > Login to Spotify </a>
            <div className="texts">
              <div className="text-input">
                <h2>Pesquise a música desejada: </h2>
                <input type="text" onChange={this.handleChange} value={this.state.input} />
              </div>
              <div className="color-input">
                  <h2>Selecione a cor:</h2>
                  <input className="color-change" onChange={({ target }) => this.setState({color: target.value})} type="color" value={this.state.color}/>
              </div>
            </div>
            
            <div className="music-list">
              {
                this.state.search.map(el => {
                  const artists = 
                  (el.artists.length >= 2)
                  ? el.artists.reduce((acc, ele) => `${acc.name}, ${ele.name}`)
                  : el.artists[0].name;
                  return (
                    <div className="music" onClick={() => this.handleClick(el.name, artists, el.album.images[0].url, el.uri )}>
                    <img src={el.album.images[1].url} />
                      <div>
                        <h3>{el.name}</h3>
                        <h5>{artists}</h5>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            
          </div>
        </div>

      </div>
    );
  }
}

export default App;
