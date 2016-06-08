import React, {PropTypes} from 'react';
import {basename} from '../globals';

const StoreHeader = ({name, craft, tags, icon}) =>  {

  return (
    <header>

      <figure className={`icon icon-${craft}`}>
        <img src={`${basename}/assets/img/${icon}`} alt={craft}/>
      </figure>

      <p className='tags'>
        {
          tags.map(tag => {
            return `#${tag} `;
          })
        }
      </p>

      <h1>{name}</h1>

    </header>
  );

};

StoreHeader.propTypes = {
  name: PropTypes.string,
  craft: PropTypes.string,
  tags: PropTypes.array,
  icon: PropTypes.string
};

export default StoreHeader;
