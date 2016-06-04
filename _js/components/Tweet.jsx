import React, {PropTypes} from 'react';

const Tweet = ({text, image, name, screenname}) =>  {

  return (
    <li>

      <figure className='profile-pic'>
          <img src={image} alt={name}/>
      </figure>

      <span className='tweet-info'>
        <span className='user'>
          <span className='user-name'>{name}</span>
          <span className='user-handler'>@{screenname}</span>
        </span><br/>

        <span className='tweet'>
          {text}
        </span>
      </span>

    </li>
  );

};

Tweet.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  screenname: PropTypes.string

};

export default Tweet;
