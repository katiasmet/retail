import React, {PropTypes, Component, cloneElement} from 'react';

import {selectAllExceptCurrent, selectByLocation, selectTagsByStoreId, selectCreationStepsByStoreId} from '../api/stores';
import {getDistance} from '../api/locations';
import {StoreHeader, Navigation, RelatedStores} from '../components';

import {getCardinalDirection} from '../util';

class LeftScreen extends Component  {

  constructor(props, context){
    super(props, context);

    this.state = {
      id: '',
      name: '',
      craft: '',
      icon: '',
      tags: [],
      portrait: '',
      quote: '',
      creationSteps: [],
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
        icon: store.icon,
        portrait: store.portrait,
        quote: store.quote
      }))
      .then(() => this.getCurrentStoreDetails())
      .then(() => this.getStores());
  }

  getCurrentStoreDetails() {
    let {id} = this.state;

    selectTagsByStoreId(id)
      .then(storeTags => {
        let tags = [];
        storeTags.forEach(storeTag => {
          tags.push(storeTag.content);
        });
        this.setState({tags: tags});
      });

    selectCreationStepsByStoreId(id)
      .then(creationSteps => this.setState({creationSteps: creationSteps}));
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

    this.getRandomStores(northStores, southStores);

  }

  getRandomStores(northStores, southStores) { //get 2 random stores, one south, one north
    let nearbyStores = [];

    nearbyStores.push(northStores[this.rndNumber(northStores.length)]); //push random north store
    nearbyStores.push(southStores[this.rndNumber(southStores.length)]); //push random south store

    this.getStoreDistances(nearbyStores);
  }

  getStoreDistances(nearbyStores) { //get distance of store
    nearbyStores.forEach(nearbyStore => {

      getDistance( 51.9152698, 4.3963989, nearbyStore.latitude, nearbyStore.longitude)
        .then(distance => {
          nearbyStore.distance = distance.rows[0].elements[0].duration.text;
          this.setState({stores: nearbyStores});
        });
    });
  }

  rndNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  render() {

    let {name, craft, icon, tags, portrait, quote, creationSteps, stores} = this.state;
    let {children} = this.props;
    let {pathname} = this.props.location;

    return (
      <section className='left-screen'>

        <StoreHeader name={name} craft={craft} tags={tags} icon={icon} />
        <Navigation pathname={pathname} />
        <figure className='label'>

        </figure>

        {cloneElement(children, {
          portrait: portrait,
          quote: quote,
          creationSteps: creationSteps
        })}

        <RelatedStores stores={stores} />

      </section>
    );
  }

}

LeftScreen.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};


export default LeftScreen;
