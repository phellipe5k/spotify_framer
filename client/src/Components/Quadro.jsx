import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { RiArrowDownSLine, RiPlayCircleFill } from 'react-icons/ri';
import { BiDotsVerticalRounded, BiSkipNext, BiSkipPrevious, BiShuffle } from 'react-icons/bi';
import { FiRepeat } from 'react-icons/fi';
import './style.css';
import styled from 'styled-components';

class Quadro extends React.Component {
  render() {
    const { name, artists, image}  = this.props.info;
    const Svg = styled.div`
        div svg rect:nth-child(n+2), div svg g path{
          fill: ${this.props.color}
        }
    `;

    return (
      <div className="quadro">
        <div className="inside">
        <Svg><div className="qrcode" dangerouslySetInnerHTML={{__html: this.props.svg}}></div></Svg>
          <div className="top-icons flex">
            <RiArrowDownSLine style={{fontSize: '32pt', color: `${this.props.color}`}} />
            <BiDotsVerticalRounded style={{fontSize: '26pt', color: `${this.props.color}`}} />
          </div>
          <img src={image}  />
          <div className="name-heart flex">
            <div className="name-artist">
              <h3 style={{color: `${this.props.color}`}}>{name}</h3>
              <h5 style={{color: `${this.props.color}`, opacity: 0.9}}>{artists}</h5>
            </div>
          <FaHeart style={{fontSize: '18pt', color: `${this.props.color}`}} />
          </div>
          <div className="time-bar">
            <div className="bar" style={{backgroundColor: `${this.props.color}`}}>
            </div>
            <div className="bar-ball" style={{backgroundColor: `${this.props.color}`}}></div>
            <h5 style={{color: `${this.props.color}`}}>00:00</h5>
          </div>
          <div className="plays-buttons flex">
            <BiShuffle style={{color: `${this.props.color}`}}/>
            <div className="play-prev-next">
              <BiSkipPrevious style={{color: `${this.props.color}`}}/>
              <RiPlayCircleFill style={{fontSize: '60pt', color: `${this.props.color}`}}/>
              <BiSkipNext style={{color: `${this.props.color}`}}/>
            </div>
            <FiRepeat style={{color: `${this.props.color}`}} />
          </div>
        </div>
        </div>
    )
  }
}

export default Quadro;