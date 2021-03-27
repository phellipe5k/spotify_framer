import styled from 'styled-components';

export const Container = styled.div`
max-height: 300px;
  overflow-y: scroll;
  align-self: center;
  width: 60%;
  margin-top: 15px;
  @media(max-width: 650px) {
    width: 100%;
  }
`;

export const Music = styled.div`
  color: white;
  cursor: pointer;
  width: 100%;
  display: flex;
  text-align: left;
  margin: 5px 0;
  transition: 500ms;
  background-color: #1DB954;
  height: 55px;
  font-size: 10pt;

  &:hover {
  transition: 500ms;
  background-color: white;
  color: #1DB954;
  }

  h3, h5 {
    margin-left: 10px;
    font-weight: lighter;
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

export const MusicCover = styled.img`
  width: 64px;
`;

export const Title = styled.h3``;

export const Artist = styled.h5``;


export const MusicInfo = styled.div``;
