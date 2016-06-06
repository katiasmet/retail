import React, {PropTypes} from 'react';

import {Tweet} from './';

const Tweets = ({tweets}) =>  {

  return (
    <section className='tweets'>
      <p>Howest TwitterFeed</p>

      <ul>

        {
          tweets.map(tweet => {
            return <Tweet key={tweet.id} image={tweet.user.profile_image_url} name={tweet.user.name} screenname={tweet.user.screen_name} text={tweet.text}/>;
          })
        }

      </ul>

    </section>
  );

};


Tweets.propTypes = {
  tweets: PropTypes.array
};

export default Tweets;
