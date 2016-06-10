import React from 'react';
import {Project} from './';

const WaitingLine = () =>  {

  return (
    <div className='waiting-line'>
      <h3>Babita's Projecten</h3>
      <p className='tags'>#madeforme #workinprogress</p>

      <Project />

    </div>
  );

};

export default WaitingLine;
