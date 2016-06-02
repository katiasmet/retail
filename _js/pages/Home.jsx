import React, {PropTypes, Component} from 'react';

import {InstaPhotos} from '../components';


class Home extends Component {

  constructor(props, context){

    super(props, context);


  }

  componentDidMount() {
    //this.getTweets();
  }

  getTweets() {

    selectByTag('howest', 3)
      .then(tweets => this.setState({tweets: tweets['statuses']}));

  }

  render() {

    return (
      <section className='window'>
          <section className='left_screen'>


          </section>

          <section className='right_screen'>


          </section>
      </section>
    );

  }

}

export default Home;
