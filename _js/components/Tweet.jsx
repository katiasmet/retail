import React, {PropTypes} from 'react';
import moment from 'moment';

const Tweet = ({text, image, name, screenname, created}) =>  {

  let createdAt = moment(new Date(created)).format('D MMM'); //convert to date to prevent Moment Issues https://github.com/moment/moment/issues/1407

  return (
    <div className='tweet'>

      <figure className='profile-pic'>
          <img src={image} alt={name}/>
      </figure>

      <div className='tweet-info'>

        <div className='user'>
          <h3 className='user-name'>{name} <span className='user-handler'>@{screenname}</span></h3>
          <span className='created-at'>{createdAt}</span>
        </div>

        <p>
          {text}
        </p>
      </div>

    </div>
  );

};

Tweet.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  screenname: PropTypes.string,
  created: PropTypes.string
};

export default Tweet;
