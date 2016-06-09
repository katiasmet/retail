import React, {PropTypes, Component, cloneElement} from 'react';

import {selectAllExceptCurrent, selectByLocation} from '../api/stores';
import {getDistance} from '../api/locations';
import {RightScreen} from './';
import {StoreHeader, Navigation, RelatedStores} from '../components';

import {getCardinalDirection} from '../util';

class App extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      tags: [],
      stores: []
    };

  }

  componentWillMount() {
    this.getCurrentStore();
  }

  getCurrentStore() {
    selectByLocation(51.9152698, 4.3963989)
      .then(store => this.setState({...store}))
      .then(() => this.getStores());
  }

  getStores() {

    let {id} = this.state;

    selectAllExceptCurrent(id)
      .then(stores => this.setState({stores: stores}))
      .then(() => this.filterStores());
  }

  filterStores() { //get position towards current store

    let {stores} = this.state;

    let northStores = stores.filter(store => {
      return getCardinalDirection( 51.9152698, store.latitude) === 'north';
    });

    let southStores = stores.filter(store => {
      return getCardinalDirection( 51.9152698, store.latitude) === 'south';
    });

    let randomStores = this.getRandomStores(northStores, southStores);
    this.getStoreDistances(randomStores);

  }

  getRandomStores(northStores, southStores) { //get 2 random stores, one south, one north

    let randomStores = [];

    randomStores[0] = northStores[this.rndNumber(northStores.length)]; //push random north store
    randomStores[1] = southStores[this.rndNumber(southStores.length)]; //push random south store

    return randomStores;

  }

  rndNumber(max) {
    return Math.floor(Math.random() * (max));
  }

  getStoreDistances(randomStores) { //get distance of store

    let stores = [];

    for(let i = 0; i < randomStores.length; i++) { //full control over north (0) and south (0)
      getDistance( 51.9152698, 4.3963989, randomStores[i].latitude, randomStores[i].longitude)
        .then(distance => {
          let distanceToStore = distance.rows[0].elements[0].duration.text;
          randomStores[i].distance = distanceToStore.match(/\d+/g)[0]; //get only number
          stores[i] = randomStores[i];
        })
        .then(() => this.setState({stores: stores}));
    }

  }

  getActiveClass() {
    let {pathname} = this.props.location;

    if(pathname === '/aboutme') {
      return 'about-me-container';
    } else if (pathname === '/madeforme') {
      return 'made-for-me-container';
    } else if (pathname === '/madebyme') {
      return 'made-by-me-container';
    }

  }

  render() {

    let {id, name, craft, icon, twitterHandler, tags, portrait, quote, stores} = this.state;

    let {children} = this.props;
    let {pathname} = this.props.location;

    return (
      <main className='window'>

        <section className={`left-screen ${this.getActiveClass()}`}>

          <StoreHeader name={name} craft={craft} tags={tags} icon={icon} />
          <Navigation pathname={pathname} />

          {
            cloneElement(children, {
              id: parseInt(id),
              portrait: portrait,
              quote: quote
            })
          }

          <RelatedStores stores={stores} />

        </ section>

        <RightScreen id={id} twitterHandler={twitterHandler} />

      </main>
    );
  }

}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default App;
