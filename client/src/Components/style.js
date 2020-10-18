import styled from 'styled-components';

export const Frame = styled.div`
  max-width: 580px;
  font-size: 32pt;
  /*filter: drop-shadow(25px 5px 3px rgba(36, 36, 36, 0.233));*/
  padding: 30px 55px;
  border: 25px solid black;
  background-color: white;
  max-height:  850px;
  margin-bottom: 30px;
  color: ${props => props.color};

  .arrowDown {
    font-size: 1em;
  }
  .dots {
    font-size: 0.7em;
  }
  
  .inside {
    margin-top: -30px;
    padding-top: 0;
  }
  
  img:last-of-type {
    width: 100%;
    margin-top: 10px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name-heart {
    align-items: flex-start;
  }

  .heart {
    font-size: 0.6em;
  }

  @media(max-width: 650px) {
    width: 100%;
    padding: 0 12%;
    font-size: 20pt

  }
`;


export const Svg = styled.div`
  div {
    width: 70%;
    position: relative;
    top: 40px;
    display: inline-block;
    height: 65px;
  }

  div svg {
    width: 100%;
    height: 100%;
  }

  div svg rect:nth-child(n+2), div svg g path{
    fill: ${props => props.color}
  }
`;

export const Names = styled.div`
  text-align: left;
  margin: 0;
  padding: 0;

  h3 {
    font-size: 16pt;
  }

  h5 {
    font-size: 10pt;
    opacity: 0.9
  }

  @media(max-width: 650px) {
    h5 {
      font-size: 8pt;
    }
    h3 {
      font-size: 13pt
    }

  }
`;

export const TimeBar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;

  .bar {
    padding: 0;
    margin: 4px 0;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    position: relative;
    background-color: ${props => props.color}
  }

  .bar-circle {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${props => props.color}
  }

  h5 {
    font-size: 10pt;
  }
  
`;

export const PlayButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24pt;

  .play-prev-next {
    font-size: 44pt;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    
    .playCircle{
      font-size: 1.7em;
    }
    
  }

  @media(max-width: 650px) {
    height: 60px;
    margin-bottom: 30px;
    font-size: 14pt;
    }
`;

export const ColorInput = styled.div`
  width: 43%;
  input {
    border-radius: 60%;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;

    ::-webkit-color-swatch-wrapper{
      padding: 0;
      border: none;
    }

    ::-webkit-color-swatch {
      border-radius: 30%;
    border: 1px solid white;

    }
  }
`;

export const SearchInput = styled.div`
  width: 50%;

  input {
  width: 90%;
  height: 40px;
  font-size: 16pt;
}
`;

export const MusicsList = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  align-self: center;
  width: 60%;
  margin-top: 15px;
  @media(max-width: 650px) {
    width: 100%;
  }

  .music {
    color: white;
    cursor: pointer;
    width: 100%;
    display: flex;
    text-align: left;
    margin: 5px 0;
    transition: 500ms;
    background-color: #1DB954;

    &:hover {
    transition: 500ms;
    background-color: white;
    color: #1DB954;
  }
  }
  
  h3, h5 {
    margin-left: 10px;
    font-weight: lighter;
  }
  img {
    width: 64px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 25px
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 25px;

    &:hover {
    background: #555;
    }
  }



`;

export const Interact = styled.div`
  width: 50%;
  height: 700px;

  input {
    outline: none;
  }

  > img {
    width: 70%
  }

  .music-wrap {
    display: flex;
    flex-direction: column;
    color: white;
  }

  .texts {
    display: flex;
    justify-content: space-evenly;
  }
  @media(max-width: 650px) {
    width: 100%;
    > img {
      width: 70%
    }

  }
`;

export const SpotifyLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  a {
    background-color: #1DB954;
  padding: 15px;
  text-decoration: none;
  color: white;
  border-radius: 30px;
  margin: 20px 0 ;
  text-align: center;
  width: 20%;
  }
`;