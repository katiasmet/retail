import React, {PropTypes, Component} from 'react';

class InstaPhoto extends Component {

  constructor(props, context){

    super(props, context);

  }

  render() {
    let {image, caption, clickHandler} = this.props;

    return (

      <figure className='insta_photo' onClick={clickHandler} ref={'figure'} >
          <img src={`/assets/img/${image}`} alt={caption}/>
      </figure>

    );
  }
}

InstaPhoto.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string,
  clickHandler: PropTypes.func
};

export default InstaPhoto;
