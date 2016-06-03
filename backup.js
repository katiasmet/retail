/*
const InstaPhotos = ({photos}) =>  {

  return (
    <section className='insta_photos' >

      {
        photos.map((photo, i) => {
          return <InstaPhoto key={i} id={i} image={photo.img} caption={photo.caption} />;
        })
      }

    </section>
  );

};
*/

import React, {PropTypes, Component} from 'react';

import {InstaPhoto} from './';

class InstaPhotos extends Component {

  constructor(props, context){
    super(props, context);

    this.clickHandler = ::this.clickHandler;
    this.active = false;
  }

  componentDidMount() {
    this.initHandler();
    this.timer = setInterval(() => this.floatHandler(), 10050);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  initHandler() {

    for (let ref in this.refs) {
      let photo = this.refs[ref];

      let rndSize = Math.random() + 0.2;
      photo.style.transform = `scale(${rndSize}, ${rndSize})`;

      let rndPos = this.rndPos(photo);
      photo.style.transform = `translate(${rndPos[0]}px, ${rndPos[1]}px) scale(${rndSize}, ${rndSize})`;

      this.floatHandler();
    }

  }

  rndPos(el) {
    let screenWidth = (0.375 * window.innerWidth) - el.getBoundingClientRect().width;

    let rndX = Math.floor(Math.random() * screenWidth);
    let rndY = Math.floor(Math.random() * (window.innerHeight - el.getBoundingClientRect().height));

    return [rndX, rndY];
  }

  floatHandler() {
    for (let ref in this.refs) {
      let photo = this.refs[ref];
      console.log(photo);
      let size = photo.getBoundingClientRect().width / photo.offsetWidth ;
      let rndPos = this.rndPos(photo);

      photo.style.transition = 'transform 10s linear';
      photo.style.transform = `translate(${rndPos[0]}px, ${rndPos[1]}px) scale(${size}, ${size})`;
    }
  }

  clickHandler(e) {
    if(this.active) {
      this.active = false;
      this.closeHandler(e.currentTarget);
    } else {
      this.active = true;
      this.openHandler(e.currentTarget);
    }
  }

  openHandler(photo) {
    clearInterval(this.timer);

    let centerX = ((0.375 * window.innerWidth) / 2) - ((200 * 1.5) / 2);
    let centerY = (window.innerHeight / 2) - ((200 * 1.5) / 2);

    photo.style.zIndex = '100';
    photo.style.transition = 'transform 0.5s ease-in';
    photo.style.transform = `translate(${centerX}px, ${centerY}px) scale(1.5, 1.5)`;
  }

  closeHandler(photo){

    photo.style.zIndex = '0';

    let rndSize = Math.random() + 0.2;
    photo.style.transform = `scale(${rndSize}, ${rndSize})`;

    let rndPos = this.rndPos(photo);
    photo.style.transform = `translate(${rndPos[0]}px, ${rndPos[1]}px) scale(${rndSize}, ${rndSize})`;

    this.timer = setInterval(() => this.floatHandler(), 10050);

    setTimeout(() => {this.floatHandler();}, 500);
  }

  render() {
    let {photos} = this.props;

    return (
      <section className='insta_photos' >

        {
          photos.map((photo, i) => {
            return <InstaPhoto key={i} id={i} image={photo.img} caption={photo.caption} ref={`instaPhoto${i}`} clickHandler={this.clickHandler} />;
          })
        }

      </section>
    );
  }
}

InstaPhotos.propTypes = {
  photos: PropTypes.array
};

export default InstaPhotos;
