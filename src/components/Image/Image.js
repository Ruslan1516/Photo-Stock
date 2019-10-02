import React from 'react';

import Icon1 from '../../assets/images/Favorite.svg';
import Icon2 from '../../assets/images/Arrows.svg';
import Icon3 from '../../assets/images/Download.svg';

const Image = props => {
  return (
    <div className='MainInfoCard'>
      <div style={{backgroundImage: `url(${props.image})`}} className='Image'/>
      <div className='Info'>
        <h1>{props.title}</h1>
        <div className='InfoIcons'>
          <i onClick={props.onclick} style={{backgroundImage: `url(${Icon1})`}}/>
          <i style={{backgroundImage: `url(${Icon2})`}}/>
          <a href={props.download + '?force=true'} download={props.id}>
            <i style={{backgroundImage: `url(${Icon3})`}}/>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Image;