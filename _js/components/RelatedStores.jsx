import React, {PropTypes} from 'react';

import {RelatedStore} from './';

const RelatedStores = ({stores}) =>  {
  return (

    <section className='related-stores'>
      {
        stores.map((store, i) => {
          return <RelatedStore key={i} name={store.name} craft={store.craft} icon={store.icon} distance={store.distance}/>;
        })
      }
    </section>

  );
};

RelatedStores.propTypes = {
  stores: PropTypes.array
};

export default RelatedStores;
