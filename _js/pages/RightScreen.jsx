export default RightScreen;

import React, {Component} from 'react';

import {WaitingLine, Events, MorphingBg, Products, Tweets} from '../components';
import {selectByLocation, selectItemsByStoreId} from '../api/stores';
import {selectByUser} from '../api/tweets';

import moment from 'moment';
import paper from 'paper';
import {isEmpty} from 'lodash';

class RightScreen extends Component {

  constructor(props, context){

    super(props, context);

    this.state = {
      active: 0, //render first product detail
      events: [],
      openingHours: {},
      timeToClose: [],
      products: [],
      tweets: []
    };

    this.clickHandler = ::this.clickHandler;

  }

  componentWillMount() {
    paper.install(window);
    this.getCurrentStore();
  }

  getCurrentStore() {
    selectByLocation(51.9152698, 4.3963989)
      .then(store => {
        this.getTweets(store.twitter_handler);
        return store.id;
      })
      .then(id => this.getStoreDetails(id));

  }

  getTweets(twitterHandler) {

    selectByUser(twitterHandler, 2)
      .then(tweets => this.setState({tweets: tweets}));

  }

  getStoreDetails(id) {

    selectItemsByStoreId(id, 'opening_hours')
      .then(openingHours => this.handleOpeningHours(openingHours));

    selectItemsByStoreId(id, 'products')
      .then(products => this.setState({products: products}));

    selectItemsByStoreId(id, 'events')
      .then(events => this.setState({events: events}));

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
          return (
            <p>
              <span className='hour'>{isOpened[0]}u</span>
              {isOpened[1]}min
              <span className='today-opened'>
                vandaag <span className='opened'>geopened</span>
              </span>
            </p>
          );
        }
      }
    }

    return <p>Gesloten</p>;
  }

  isOpened() {

    let end = moment(this.day[1], 'HH:mm');
    let toClose = moment.duration(end.diff(moment(), 'milliseconds')); //time to close

    if(toClose.hours() === '0' && toClose.minutes() === '0') {
      clearInterval(this.timer);
    }

    return [toClose.hours(), toClose.minutes()];
  }

  clickHandler(i) {
    this.setState({active: i});
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

  renderProducts() {
    let {products, active} = this.state;

    if(isEmpty(products)) {
      return false;
    } else {
      return <Products product={products[active]} productsLength={Object.keys(products).length} clickHandler={this.clickHandler}/>;
    }
  }

  render() {

    let {events, tweets} = this.state;

    return (
      <section className='right-screen'>

          <section className='header'>

            <div className='store-info'>

              <WaitingLine />
              <Events events={events} />

            </div>

            <div className='opening-hours'>

              <MorphingBg id='canvas-right' radius={0.06} fillColors={['#531339', '#531339']} amount={2} />
              <className className='today'>
                { this.renderToday() }
              </className>

              { this.renderNext() }
            </div>

          </section>

          { this.renderProducts() }

          <Tweets tweets={tweets}/>
      </section>
    );

  }

}

export default RightScreen;
