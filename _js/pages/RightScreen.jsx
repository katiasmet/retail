export default RightScreen;

import React, {PropTypes, Component} from 'react';

import {Tweets} from '../components';
import {selectAll} from '../api/stores';
import {selectByTag} from '../api/tweets';

import moment from 'moment';

class RightScreen extends Component {

  constructor(props, context){

    super(props, context);

    this.state = {
      openingHours: {},
      timeToClose: [],
      tweets: []
    };

  }

  componentDidMount() {
    //this.getTweets();
    this.getCurrentStore();
  }

  getTweets() {

    selectByTag('howest', 3, 'recent')
      .then(tweets => this.setState({tweets: tweets['statuses']}));

  }

  getCurrentStore() {
    selectAll()
      .then(stores => this.filterStores(stores))
      .then(() => this.openingHoursHandler());
  }

  filterStores(stores) {
    let currentStore = {};

    stores.forEach(store => {
      if(store.location.coordinates.latitude === 51.9144769 && store.location.coordinates.longitude ===  4.4014781) {
        currentStore = store;
      }
    });

    this.setState({openingHours: currentStore.opening_hours});
  }

  openingHoursHandler() {
    moment.locale('nl');

    let {openingHours} = this.state;
    let otherOpeningHours = {};

    let opened = false;
    for(let openingHour in openingHours) {
      if(openingHour === moment().format('dddd')) {
        this.day = openingHours[openingHour];
        let start = moment(openingHours[openingHour][0], 'HH:mm');
        let end = moment(openingHours[openingHour][1], 'HH:mm');

        if(moment().isBetween(start, end)) {
          opened = true;
          this.timer = setInterval(() => this.isOpened(), 60000); //rerender every minute
          this.isOpened();
        }
      }else {
        otherOpeningHours.openingHour = openingHours[openingHour];
      }
    }

    console.log(otherOpeningHours);
  }

  isOpened() {

    let end = moment(this.day[1], 'HH:mm');
    let toClose = moment.duration(end.diff(moment(), 'milliseconds')); //time to close

    if(toClose.hours() === '0' && toClose.minutes() === '0') {
      clearInterval(this.timer);
    }

    this.setState({timeToClose: [toClose.hours(), toClose.minutes()]});
  }


  render() {

    let {timeToClose, tweets} = this.state;

    return (
      <section className='right-screen'>
          <p>Nog {timeToClose[0]}u en {timeToClose[1]}min geopened vandaag.</p>
          <Tweets tweets={tweets}/>
      </section>
    );

  }

}

export default RightScreen;
