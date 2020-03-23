import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import techbrain from './techbrain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55, reverse: true }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={techbrain} height='100' width='100'/>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;
