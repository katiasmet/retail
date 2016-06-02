import React, {PropTypes} from 'react';

import {InstaPhoto} from './';

const InstaPhotos = ({photos}) =>  {

  return (
    <section className='insta_photos'>

      {
        photos.map((photo, i) => {
          return <InstaPhoto key={i} image={photo.img} caption={photo.caption} />;
        })
      }

    </section>
  );

};

InstaPhotos.propTypes = {
  photos: PropTypes.array
};

export default InstaPhotos;
