import React, {PropTypes} from 'react';

import {RelatedStore} from './';

const RelatedStores = ({stores}) =>  {
  return (

    <ul className='related-stores'>
      {
        stores.map((store, i) => {
          return <RelatedStore key={i} name={store.name} craft={store.craft} icon={store.icon} distance={store.distance}/>;
        })
      }
    </ul>

  );
};

RelatedStores.propTypes = {
  stores: PropTypes.array
};

export default RelatedStores;
