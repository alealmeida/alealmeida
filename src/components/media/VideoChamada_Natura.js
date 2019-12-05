import React from 'react';
import ReactPlayer from 'react-player'

class ResponsivePlayer extends React.Component {
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
          playing
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            // url='./src/components/media/media_chamada_natura.mp4'
            // src="./src/components/media/media_chamada_natura.mp4"
          />
        </div>
      )
    }
  }

export default ResponsivePlayer;
