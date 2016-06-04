import React, {PropTypes} from 'react';

import {NearbyStore} from './';

const NearbyStores = ({stores}) =>  {
  return (

    <ul className='nearby-stores'>
      {
        stores.map((store, i) => {
          return <NearbyStore key={i} name={store.name} craft={store.craft} icon={store.icon} />;
        })
      }
    </ul>

  );
};

NearbyStores.propTypes = {
  stores: PropTypes.array
};

export default NearbyStores;
