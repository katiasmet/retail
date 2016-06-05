export default RightScreen;

import React, {PropTypes, Component} from 'react';

import {Tweets} from '../components';
import {selectByTag} from '../api/tweets';

class RightScreen extends Component {

  constructor(props, context){

    super(props, context);

    this.state = {
      tweets: []
    };

  }

  componentDidMount() {
    this.getTweets();
  }

  getTweets() {

    selectByTag('howest', 3, 'recent')
      .then(tweets => this.setState({tweets: tweets['statuses']}));

  }

  render() {

    let {tweets} = this.state;

    return (
      <section className='right-screen'>
          <Tweets tweets={tweets}/>
      </section>
    );

  }

}

export default RightScreen;
