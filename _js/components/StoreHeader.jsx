import React, {PropTypes} from 'react';

const StoreHeader = ({name, craft, tags, icon}) =>  {

  return (
    <header>
      <figure className='icon'>
        <img src={`/assets/svg/${icon}`} alt={craft}/>
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
