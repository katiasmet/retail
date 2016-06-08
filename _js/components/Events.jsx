import React, {PropTypes} from 'react';
import {Event} from './';

const Events = ({events}) =>  {

  return (
    <div className='upcoming-events'>
      <h3>Komende activiteiten</h3>
      <div className='tags'>#madebyme</div>

        <dl className='event-list'>

          {
            events.map((event, i) => {
              return <Event key={i} date={event.date} info={event.info} />;
            })
          }

        </dl>

  </div>

  );

};

Events.propTypes = {
  events: PropTypes.array
};

export default Events;
