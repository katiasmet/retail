import React, {Component} from 'react';

import {selectByTag} from '../../api/instagram_photos';
import {Photo} from '../../components/';

class MadeByMe extends Component {

  constructor(props, context){

    super(props, context);

    this.state = {
      photos: []
    };

    this.clickHandler = ::this.clickHandler;
    this.active = false;

  }

  componentDidMount() {
    this.getInstaPhotos();
    this.timer = setInterval(() => this.floatHandler(), 10050);
  }

  getInstaPhotos() {

    selectByTag()
      .then(photos => this.setState({photos: photos}))
      .then(() => this.initHandler());
  }


  initHandler() {

    for (let ref in this.refs) {

      if( ref !== 'photo-container') { //parent container ref needed to calculate width / height of it
        let photo = this.refs[ref].refs.figure;

        let rndSize = Math.random() + 0.2;
        photo.style.transform = `scale(${rndSize}, ${rndSize})`;

        let rndPos = this.rndPos(photo);
        photo.style.transform = `translate(${rndPos[0]}px, ${rndPos[1]}px) scale(${rndSize}, ${rndSize})`;

        this.floatHandler();
      }

    }

  }

  rndPos(el) {

    let container = this.refs['photo-container'];
    let containerWidth = container.getBoundingClientRect().width - el.getBoundingClientRect().width;
    let containerHeight = container.getBoundingClientRect().height - el.getBoundingClientRect().height;

    let rndX = Math.floor(Math.random() * containerWidth);
    let rndY = Math.floor(Math.random() * containerHeight);

    return [rndX, rndY];
  }

  floatHandler() {
    for (let ref in this.refs) {
      if( ref !== 'photo-container') {
        let photo = this.refs[ref].refs.figure;

        if(photo !== this.active) { //alle elementen waar niet op geklikt is, zweven verder.
          let size = photo.getBoundingClientRect().width / photo.offsetWidth ;
          let rndPos = this.rndPos(photo);

          photo.style.transition = 'transform 10s linear';
          photo.style.transform = `translate(${rndPos[0]}px, ${rndPos[1]}px) scale(${size}, ${size})`;
        }
      }
    }
  }

  clickHandler(e) {
    if(this.active) {
      this.closeHandler(this.active);
      this.active = false;
    } else {
      this.active = true;
      this.active = e.currentTarget;
      this.openHandler(e.currentTarget);
    }
  }

  openHandler(photo) {
    //andere items: filter: blur(0.25rem); opacity: 0.8;

    let container = this.refs['photo-container'];

    let centerX = (container.getBoundingClientRect().width / 2) - ((200 * 1.5) / 2); //containerwidth / 2 - imagesize * scalefactor /2
    let centerY = (container.getBoundingClientRect().height / 2) - ((200 * 1.5) / 2);

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

    setTimeout(() => {this.floatHandler();}, 500);
  }


  render() {

    let {photos} = this.state;

    return (

      <section className='photos' ref='photo-container'>

        {
          photos.map((photo, i) => {
            return <Photo key={i} image={photo.img} caption={photo.caption} ref={`photo${i}`} clickHandler={this.clickHandler} />;
          })
        }

      </section>
    );

  }

}

export default MadeByMe;
