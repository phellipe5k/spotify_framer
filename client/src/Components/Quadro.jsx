import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { RiArrowDownSLine, RiPlayCircleFill } from 'react-icons/ri';
import { BiDotsVerticalRounded, BiSkipNext, BiSkipPrevious, BiShuffle } from 'react-icons/bi';
import { FiRepeat } from 'react-icons/fi';
import { Names, PlayButtons, Svg, TimeBar, Frame } from './style';

class Quadro extends React.Component {
  render() {
    const { name, artists, image}  = this.props.info;
    const { color } = this.props

    return (
      <Frame color={color}>
        <div className="inside">
        <Svg color={color}>
          <div className="qrcode" dangerouslySetInnerHTML={{__html: this.props.svg}}></div>
        </Svg>
          <div className="top-icons flex">
            <RiArrowDownSLine className="arrowDown" />
            <BiDotsVerticalRounded className="dots" />
          </div>
          <img src={image}  />
          <div className="name-heart flex">
            <Names color={color}>
              <h3>{name}</h3>
              <h5>{artists}</h5>
            </Names>
          <FaHeart className="heart" />
          </div>
          <TimeBar color={color}>
            <div className="bar"></div>
            <div className="bar-circle"></div>
            <h5>0:00</h5>
          </TimeBar>
          <PlayButtons color={color}>
            <BiShuffle/>
            <div className="play-prev-next">
              <BiSkipPrevious/>
              <RiPlayCircleFill className="playCircle"/>
              <BiSkipNext/>
            </div>
            <FiRepeat/>
          </PlayButtons>
        </div>
        </Frame>
    )
  }
}

export default Quadro;