import React, {PropTypes, Component} from 'react';

class Photo extends Component { //statecomponent om ref te kunnen leggen voor virtual dom manipulation

  constructor(props, context){
    super(props, context);
  }

  render() {
    let {image, caption, clickHandler} = this.props;

    return (

      <figure className='photo' onClick={clickHandler} ref={'figure'} >
          <img src={`/assets/img/${image}`} alt={caption}/>
      </figure>

    );
  }
}

Photo.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Photo;
