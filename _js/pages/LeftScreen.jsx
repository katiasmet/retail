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
    selectByLocation(51.9145, 4.40148)
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
      .then(stores => this.setState({stores: stores}));
  }

  /*filterStores(stores) {

    let relatedStores = [];

    stores.forEach(store => {


    relatedStores.forEach(relatedStore => {
      getCardinalDirection(
        currentStore.location.coordinates.latitude, currentStore.location.coordinates.longitude,
        relatedStore.location.coordinates.latitude, relatedStore.location.coordinates.longitude
      );

      getDistance(currentStore.location.coordinates.latitude, currentStore.location.coordinates.longitude,
        relatedStore.location.coordinates.latitude, relatedStore.location.coordinates.longitude)
        .then(distance => console.log(distance.rows));
      //.rows[0].elements[0].duration.text
    });

    stores.forEach(store => {
        //2 random stores uithalen
        //stores east and west of currentstore
      relatedStores.push(store);

    });

  }*/

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
