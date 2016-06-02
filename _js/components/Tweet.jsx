import React, {PropTypes} from 'react';

const Tweet = ({id, text, image, name, screenname}) =>  {

  return (
    <li>

      <figure className='profile_pic'>
          <img src={image} alt={name}/>
      </figure>

      <span className='tweet_info'>
        <span className='user'>
          <span className='user_name'>{name}</span>
          <span className='user_handler'>@{screenname}</span>
        </span><br/>

        <span className='tweet'>
          {text}
        </span>
      </span>

    </li>
  );

};

export default Tweet;
