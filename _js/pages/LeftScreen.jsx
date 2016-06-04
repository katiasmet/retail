import React, {PropTypes, Component, cloneElement} from 'react';

import {selectAll} from '../api/stores';
import {StoreHeader, Navigation, NearbyStores} from '../components';

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
      creationProces: [],
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

    let nearbyStores = [];
    let currentStore = {};

    stores.forEach(store => {

      if(store.location.coordinates.latitude === 51.916523 && store.location.coordinates.longitude ===  4.3951067) {
        //Afhankelijk van de locatie van het bord wordt bepaalde info ingeladen
        currentStore = store;
      } else {
        //2 random stores uithalen
        nearbyStores.push(store);
      }
    });

    this.setState({
      name: currentStore.name,
      craft: currentStore.craft,
      icon: currentStore.icon,
      tags: currentStore.tags,
      portrait: currentStore.portrait,
      quote: currentStore.quote,
      creationProces: currentStore.creation_proces,
      stores: nearbyStores
    });

  }

  render() {

    let {name, craft, icon, tags, stores, portrait, quote, creationProces} = this.state;
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
          creationProces: creationProces
        })}

        <NearbyStores stores={stores} />

      </section>
    );
  }

}

LeftScreen.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string
};


export default LeftScreen;
