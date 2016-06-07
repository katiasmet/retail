import React, {PropTypes} from 'react';

const RelatedStore = ({name, craft, icon, distance}) =>  {

  return (
    <li className='related-store'>
      <span className='distance'>{distance}</span>
      <span className='crafter'>
        <span className='crafter-name'>{name}</span>
        <span className='craft'>{craft}</span>
      </span>
      <figure className='icon'>
        <img src={`/assets/svg/${icon}`} alt={craft}/>
      </figure>
    </li>
  );

};

RelatedStore.propTypes = {
  name: PropTypes.string,
  craft: PropTypes.string,
  icon: PropTypes.string,
  distance: PropTypes.string
};

export default RelatedStore;
