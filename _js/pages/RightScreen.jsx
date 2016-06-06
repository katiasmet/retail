export default RightScreen;

import React, {Component} from 'react';

import {Tweets} from '../components';
import {selectByLocation, selectOpeningHoursByStoreId} from '../api/stores';
import {selectByUser} from '../api/tweets';

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
    this.getTweets();
    this.getCurrentStore();
  }

  getTweets() {

    selectByUser('bibouskincare', 2)
      .then(tweets => this.setState({tweets: tweets}));

  }

  getCurrentStore() {
    selectByLocation(51.9145, 4.40148)
      .then(store => selectOpeningHoursByStoreId(store.id))
      .then(openingHours => this.handleOpeningHours(openingHours));
  }

  handleOpeningHours(openingHours) {

    let setOpeningHours = {};

    openingHours.forEach(openingHour => {
      setOpeningHours[openingHour.day] = [openingHour.opening_time, openingHour.closing_time];
    });

    this.setState({
      openingHours: setOpeningHours
    });
  }

  renderToday() {
    moment.locale('nl');

    let {openingHours} = this.state;

    for(let openingHour in openingHours) {
      if(openingHour === moment().format('dddd')) { //today's openingshours

        this.day = openingHours[openingHour];
        let start = moment(openingHours[openingHour][0], 'HH:mm');
        let end = moment(openingHours[openingHour][1], 'HH:mm');

        if(moment().isBetween(start, end)) { //store opened at this moment
          this.timer = setInterval(() => this.isOpened(), 60000); //rerender every minute
          let isOpened = this.isOpened();
          return <p>{isOpened[0]}u {isOpened[1]}min vandaag geopened</p>;
        }

      } else {
        return <p>Gesloten</p>;
      }
    }
  }

  isOpened() {

    let end = moment(this.day[1], 'HH:mm');
    let toClose = moment.duration(end.diff(moment(), 'milliseconds')); //time to close

    if(toClose.hours() === '0' && toClose.minutes() === '0') {
      clearInterval(this.timer);
    }

    return [toClose.hours(), toClose.minutes()];
  }

  renderNext() { //get next 3 opening hours

    let {openingHours} = this.state;
    let nextDays = [];

    moment.updateLocale('nl', {
      weekdaysShort: [
        'Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vrij', 'Zat'
      ]
    });

    for(let openingHour in openingHours) {
      for(let i = 1; i < 4; i++) {
        if(openingHour === moment().add(i, 'd').format('dddd')) {
          nextDays.push({
            'day': moment().add(i, 'd').format('ddd'),
            'opened': openingHours[openingHour][0],
            'closed': openingHours[openingHour][1]
          });
        }
      }
    }

    return (
      <div className='next-days'>
        {
          nextDays.map((nextDay, i) => {
            return <p key={i}>{nextDay.day} {nextDay.opened} - {nextDay.closed} </p>;
          })
        }
      </div>
    );

  }

  render() {

    let {tweets} = this.state;

    return (
      <section className='right-screen'>
          <section className='opening-hours'>
            { this.renderToday() }
            { this.renderNext() }
          </section>
          <Tweets tweets={tweets}/>
      </section>
    );

  }

}

export default RightScreen;
