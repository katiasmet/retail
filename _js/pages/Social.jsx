import React, {PropTypes, Component} from 'react';

import {Tweets} from '../components';
import {selectByTag} from '../api/tweets';

class Home extends Component {

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

    selectByTag('howest', 3)
      .then(tweets => this.setState({tweets: tweets['statuses']}));

  }

  render() {

    let {tweets} = this.state;

    return (
      <section>
          <Tweets tweets={tweets}/>
      </section>
    );

  }

}

export default Home;
