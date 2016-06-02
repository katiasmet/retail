import React, {PropTypes} from 'react';

const InstaPhoto = ({image, caption}) =>  {

  return (
    <figure className='insta_photo' onClick={e => this.instaPhotoClickHandler()}>
      <img src={`/assets/img/${image}`} alt={caption}/>
    </figure>
  );

};

InstaPhoto.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string
};

export default InstaPhoto;
