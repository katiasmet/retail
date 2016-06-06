import React, {PropTypes, Component, cloneElement} from 'react';

import {selectAll} from '../api/stores';
import {getDistance} from '../api/locations';
import {StoreHeader, Navigation, RelatedStores} from '../components';

import {getCardinalDirection} from '../util';

class LeftScreen extends Component  {

  constructor(props, context){
    super(props, context);

    this.state = {
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
    this.getStores();
  }

  getStores() {
    selectAll()
      .then(stores => this.filterStores(stores));
  }

  filterStores(stores) {

    let relatedStores = [];
    let currentStore = {};

    stores.forEach(store => {
      if(store.location.coordinates.latitude === 51.9144769 && store.location.coordinates.longitude ===  4.4014781) {
        //Afhankelijk van de locatie van het bord wordt bepaalde info ingeladen
        currentStore = store;
      } else {
        relatedStores.push(store);
      }
    });

    relatedStores.forEach(relatedStore => {
      /*getCardinalDirection(
        currentStore.location.coordinates.latitude, currentStore.location.coordinates.longitude,
        relatedStore.location.coordinates.latitude, relatedStore.location.coordinates.longitude
      );*/

      getDistance(currentStore.location.coordinates.latitude, currentStore.location.coordinates.longitude,
        relatedStore.location.coordinates.latitude, relatedStore.location.coordinates.longitude)
        .then(distance => console.log(distance.rows));
      //.rows[0].elements[0].duration.text
    });

    /*stores.forEach(store => {
        //2 random stores uithalen
        //stores east and west of currentstore
      relatedStores.push(store);

    });*/

    this.setState({
      name: currentStore.name,
      craft: currentStore.craft,
      icon: currentStore.icon,
      tags: currentStore.tags,
      portrait: currentStore.portrait,
      quote: currentStore.quote,
      creationSteps: currentStore.creation_steps,
      stores: relatedStores
    });

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
