import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const setActive = (pathname, name) => {
  return (`/leftscreen/${name}` === pathname) ? 'active' : '';
};

const Navigation = ({pathname}) => {

  return (
      <nav>
        <ul>
          <li><Link className={`nav-item ${setActive(pathname, 'madebyme')}`} to='/leftscreen/madebyme'>#madebyme</Link></li>
          <li><Link className={`nav-item ${setActive(pathname, 'madeforme')}`} to='/lefscreen/madeforme'>#madeforme</Link></li>
          <li><Link className={`nav-item ${setActive(pathname, 'aboutme')}`} to='/leftscreen/aboutme'>aboutme</Link></li>
        </ul>
      </nav>
    );

};

Navigation.propTypes = {
  pathname: PropTypes.string
};

export default Navigation;
