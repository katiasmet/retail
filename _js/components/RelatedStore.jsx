import React, {PropTypes} from 'react';
import {basename} from '../globals';

const RelatedStore = ({name, craft, icon, distance}) =>  {

  return (
    <div className='related-store'>
      <div className='distance'>
        <figure className='arrow'>
          <img src={`${basename}/assets/img/arrow.png`} alt='arrow'/>
        </figure>
        {distance}&#39;min
      </div>
      <p className='crafter'>
        <span className='crafter-name'>{name}</span>
        <span className='craft'>{craft}</span>
      </p>
      <figure className={`icon icon-${craft}`}>
        <img src={`${basename}/assets/img/${icon}`} alt={craft}/>
      </figure>
    </div>
  );

};

RelatedStore.propTypes = {
  name: PropTypes.string,
  craft: PropTypes.string,
  icon: PropTypes.string,
  distance: PropTypes.string
};

export default RelatedStore;
