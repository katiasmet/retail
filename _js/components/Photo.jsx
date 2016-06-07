import React, {PropTypes, Component} from 'react';

class Photo extends Component { //statecomponent om ref te kunnen leggen voor virtual dom manipulation

  constructor(props, context){
    super(props, context);
  }

  render() {
    let {image, caption, name, screenName, activeClass, clickHandler} = this.props;

    return (
      <div className={`photo-container ${ activeClass ? activeClass : ''}`} ref={'figure'} onClick={clickHandler}>
        <figure className='photo'>
            <img src={image} alt={caption}/>
        </figure>
        <div className='photo-info'>
          <h4 className='name'>{name}<span className='screen-name'>@{screenName}</span></h4>
          <p>{caption}</p>
        </div>
      </div>

    );
  }
}

Photo.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string,
  name: PropTypes.string,
  screenName: PropTypes.string,
  activeClass: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Photo;
