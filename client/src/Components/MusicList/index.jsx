import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import * as S from  './style.js';


const MusicList = ({ musics, onClick }) => {
  return (
   <S.Container>
     { musics.map(element => {
       const artists = (element.artists.length >= 2)
       ? element.artists.reduce((acc, ele) => `${acc.name}, ${ele.name}`)
       : element.artists[0].name;
       return (
         <S.Music onClick={ onClick } >
          <S.MusicCover />
          <S.MusicInfo>
            <S.Title>{ element.name }</S.Title>
            <S.Artist>{ element.artist }</S.Artist>
          </S.MusicInfo>
         </S.Music>
       )
     }) }
   </S.Container>
  )
}

export default MusicList;
