import React, {PropTypes} from 'react';
import moment from 'moment';

const Event = ({date, info}) =>  {

  let eventDate = moment(new Date(date)).format('ddd D MMM');


  return (
    <span className='event'>
      <dt>{eventDate}</dt>
      <dd>{info}</dd>
    </span>
  );

};

Event.propTypes = {
  date: PropTypes.string,
  info: PropTypes.string
};

export default Event;
