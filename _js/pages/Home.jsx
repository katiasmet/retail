import React, {PropTypes, Component} from 'react';

import {selectByTag} from '../api/instagram_photos';
import {InstaPhotos} from '../components/';

class Home extends Component {

  constructor(props, context){

    super(props, context);

    this.state = {
      photos: []
    };

    this.instaPhotoClickHandler = ::this.instaPhotoClickHandler;

  }

  componentDidMount() {
    this.getInstaPhotos();
  }

  getInstaPhotos() {

    selectByTag()
      .then(photos => this.setState({photos: photos}))
      .then(() => this.initInstaPhotos());

  }

  initInstaPhotos() {

    let $insta_photos = document.querySelectorAll('.insta_photo');

    //Random XY pos for photos
    //Random Size
    $insta_photos.forEach(photo => {

      let rndSize = Math.random() + 0.2;
      photo.style.transform = `scale(${rndSize}, ${rndSize})`;

      let rndPos = this.rndPos(photo);
      photo.style.transform = `translate(${rndPos[0]}px, ${rndPos[1]}px) scale(${rndSize}, ${rndSize})`;

      this.floatInstaPhotos();
    });

  }

  rndPos(el) {
    let screen_width = (0.375 * window.innerWidth) - el.getBoundingClientRect().width;

    let rndX = Math.floor(Math.random() * screen_width);
    let rndY = Math.floor(Math.random() * (window.innerHeight - el.getBoundingClientRect().height));

    return [rndX, rndY];
  }

  floatInstaPhotos() {
    let $insta_photos = document.querySelectorAll('.insta_photo');

    $insta_photos.forEach(photo => {
      let size = photo.getBoundingClientRect().width / photo.offsetWidth ;
      let rndPos = this.rndPos(photo);

      photo.style.transition = 'transform 10s linear';
      photo.style.transform = `translate(${rndPos[0]}px, ${rndPos[1]}px) scale(${size}, ${size})`;

    });


    setTimeout(
      () => { this.floatInstaPhotos();},
       10050);
  }

  instaPhotoClickHandler(e) {

    console.log('instafamous');

  }

  render() {

    let {photos} = this.state;

    return (
      <section className='window'>
          <section className='left_screen'>

            <InstaPhotos photos={photos} />

          </section>

          <section className='right_screen'>


          </section>
      </section>
    );

  }

}

export default Home;
