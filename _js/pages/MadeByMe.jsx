import React, {Component, PropTypes} from 'react';

import {selectBySearch} from '../api/tweets';
import {StoreHeader, Navigation, RelatedStores, Photo} from '../components';

class MadeByMe extends Component {

  constructor(props, context){

    super(props, context);

    this.state = {
      photos: []
    };

    this.active = false;

  }

  componentWillMount() {
    this.getPhotos();
    this.timer = setInterval(() => this.floatHandler(), 10050);
  }

  getPhotos() {

    selectBySearch('perfume filter:images', 10, 'popular') //normally you get most recent ones, but popular ones are nicer to present to client.
      .then(tweets => this.filterPhotos(tweets.statuses));

    /*selectByPhotos(['#perfume','#diy'], 10, 'popular') //normally you get most recent ones, but popular ones are nicer to present to client.
      .then(tweets => this.filterPhotos(tweets.statuses))
      .then(() => this.initHandler());*/
  }

  filterPhotos(tweets) {

    console.log('filter fotos');

    let photos = [];

    tweets.forEach(tweet => {

      let photo = {
        'name': tweet.user.name,
        'screen_name': tweet.user.screen_name,
        'text': tweet.text,
        'image': tweet.entities.media[0].media_url, //get one / first photo of tweet
        'active': ''
      };

      photos.push(photo);
    });

    this.setState({photos: photos});
    this.initHandler();

  }

  initHandler() {

    console.log('init handler');

    for (let ref in this.refs) {

      if( ref !== 'photo-container') { //parent container ref needed to calculate width / height of it
        let photo = this.refs[ref].refs.figure;

        let rndSize = Math.random() - 0.3;
        photo.style.transform = `scale(${rndSize}, ${rndSize})`;

        this.floatHandler();
      }

    }

  }

  rndPos(el) {

    //let container = this.refs['photo-container'];

    //let containerWidth = container.getBoundingClientRect().width - el.getBoundingClientRect().width + 50;
    //let containerHeight = container.getBoundingClientRect().height - el.getBoundingClientRect().height + 50;

    let rndX = Math.floor(Math.random() * 20 - 10);
    let rndY = Math.floor(Math.random() * 10 - 5);

    return [rndX, rndY];
  }

  floatHandler() {

    for (let ref in this.refs) {
      if( ref !== 'photo-container') {
        let photo = this.refs[ref].refs.figure;

        if(photo !== this.active) { //alle elementen waar niet op geklikt is, zweven verder.
          let size = photo.getBoundingClientRect().width / photo.offsetWidth ;
          let rndPos = this.rndPos(photo);

          photo.style.transform = `translate(0px, 0px) scale(${size}, ${size})`;
          photo.style.transition = 'transform 10s linear';
          photo.style.transform = `translate(${rndPos[0]}rem, ${rndPos[1]}rem) scale(${size}, ${size})`;
        }
      }
    }
  }

  clickHandler(e, id) {
    if(this.active) {

      this.activeHandler(true, id);
      this.closeHandler(this.active);
      this.active = false;

    } else {

      this.active = e.currentTarget;
      this.activeHandler(false, id);
      this.openHandler(e.currentTarget);

    }
  }

  openHandler(photo) {
    let container = this.refs['photo-container'];

    let centerX = (container.getBoundingClientRect().width / 2) - (160 / 2); //containerwidth / 2 - imagesize /2
    let centerY = (container.getBoundingClientRect().height / 2) - (160 / 2);

    photo.style.zIndex = '100';
    photo.style.transition = 'transform 0.5s ease-in';
    photo.style.transform = 'translate(0, 0) scale(1, 1)';
  }

  activeHandler(close, id) {
    let {photos} = this.state;
    let activePhotos = photos; //change state of one photo

    for(let i = 0; i < photos.length; i++) {
      if(close) {
        activePhotos[i].active = '';
      } else if(i === id) {
        activePhotos[i].active = 'active';
      } else {
        activePhotos[i].active = 'inactive';
      }
    }

    this.setState({photos: activePhotos});
  }

  closeHandler(photo){

    photo.style.zIndex = '0';

    let rndSize = Math.random() + 0.25;
    photo.style.width = '10rem';
    photo.style.transform = `scale(${rndSize}, ${rndSize})`;

    let rndPos = this.rndPos(photo);
    photo.style.transform = `translate(${rndPos[0]}px, ${rndPos[1]}px) scale(${rndSize}, ${rndSize})`;

    setTimeout(() => {this.floatHandler();}, 500);
  }


  render() {

    let {name, craft, tags, icon, pathname, stores} = this.props;
    let {photos} = this.state;

    console.log('render');

    return (
      <section className='left-screen made-by-me-container'>

        <StoreHeader name={name} craft={craft} tags={tags} icon={icon} />
        <Navigation pathname={pathname} />

        <section className='photos' ref='photo-container'>

          {
            photos.map((photo, i) => {
              return <Photo key={i}
                image={photo.image}
                caption={photo.text}
                name={photo.name}
                screenName={photo.screen_name}
                ref={`photo${i}`}
                activeClass={photo.active}
                clickHandler={e => this.clickHandler(e, i)} />;
            })
          }

        </section>

        <RelatedStores stores={stores} />

      </section>


    );

  }

}

MadeByMe.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  craft: PropTypes.string,
  tags: PropTypes.array,
  icon: PropTypes.string,
  pathname: PropTypes.string,
  portrait: PropTypes.string,
  quote: PropTypes.string,
  stores: PropTypes.array
};

export default MadeByMe;
