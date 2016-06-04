import React, {PropTypes, Component} from 'react';

import {InstaPhoto} from './';

class InstaPhotos extends Component { //statecomponent om ref te kunnen leggen voor virtual dom manipulation

  constructor(props, context){
    super(props, context);
  }

  render() {
    let {photos, clickHandler} = this.props;

    return (
      <section className='insta-photos' >

        {
          photos.map((photo, i) => {
            return <InstaPhoto key={i} image={photo.img} caption={photo.caption} ref={`instaPhoto${i}`} clickHandler={clickHandler} />;
          })
        }

      </section>
    );
  }
}

InstaPhotos.propTypes = {
  photos: PropTypes.array,
  clickHandler: PropTypes.func
};

export default InstaPhotos;
