import React, {PropTypes} from 'react';

const NearbyStore = ({name, craft, icon}) =>  {

  return (
    <li className='nearby-store'>
      <span>5 min</span>
      <span className='crafter'>
        <span className='crafter-name'>{name}</span>
        <span className='craft'>{craft}</span>
      </span>
      <figure>
        <img src={`/assets/svg/${icon}`} alt={craft}/>
      </figure>
    </li>
  );

};

NearbyStore.propTypes = {
  name: PropTypes.string,
  craft: PropTypes.string,
  icon: PropTypes.string
};

export default NearbyStore;
