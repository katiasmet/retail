import React, {PropTypes, Component, cloneElement} from 'react';

import {selectAllExceptCurrent, selectByLocation, selectItemsByStoreId} from '../api/stores';
import {getDistance} from '../api/locations';
import {RightScreen} from './';

import {getCardinalDirection} from '../util';

class App extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      id: '',
      name: '',
      craft: '',
      icon: '',
      twitterHandler: '',
      tags: [],
      portrait: '',
      quote: '',
      stores: []
    };
  }

  componentWillMount() {
    this.getCurrentStore();
  }

  getCurrentStore() {
    selectByLocation(51.9152698, 4.3963989)
      .then(store => this.setState({
        id: store.id,
        name: store.name,
        craft: store.craft,
        twitterHanlder: store.twitter_handler,
        icon: store.icon,
        portrait: store.portrait,
        quote: store.quote
      }))
      .then(() => this.getCurrentStoreDetails())
      .then(() => this.getStores());
  }

  getCurrentStoreDetails() {

    let {id} = this.state;

    selectItemsByStoreId(id, 'tags')
      .then(storeTags => {
        let tags = [];
        storeTags.forEach(storeTag => {
          tags.push(storeTag.content);
        });
        this.setState({tags: tags});
      });
  }

  getStores() {

    let {id} = this.state;

    selectAllExceptCurrent(id)
      .then(stores => this.setState({stores: stores}))
      .then(() => this.filterStores());
  }

  filterStores() { //get position towards current store

    let {stores} = this.state;

    let northStores = [];
    let southStores =[];

    stores.forEach(store => {

      let position = getCardinalDirection( 51.9152698, store.latitude);

      if(position === 'north') {
        northStores.push(store);
      } else {
        southStores.push(store);
      }

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

  render() {

    let {id, name, craft, icon, twitterHandler, tags, portrait, quote, stores} = this.state;
    let {children} = this.props;
    let {pathname} = this.props.location;

    return (
      <main className='window'>
        {
          cloneElement(children, {
            id: parseInt(id),
            name: name,
            craft: craft,
            tags: tags,
            icon: icon,
            portrait: portrait,
            quote: quote,
            pathname: pathname,
            stores: stores
          })
        }
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
