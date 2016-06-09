import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const setActive = (pathname, name) => {
  return (`/${name}` === pathname) ? 'active' : '';
};

const Navigation = ({pathname}) => {

  return (
      <nav className='left-nav'>
        <ul>

          <li>
            <Link className={`nav-item ${setActive(pathname, 'aboutme')}`} to='/aboutme'>
              <span className='pointer'></span>
              aboutme
            </Link>
          </li>

          <li>
            <Link className={`nav-item ${setActive(pathname, 'madebyme')}`} to='/madebyme'>
              <span className='pointer'></span>
              #made<br />
              byme
            </Link>
          </li>

          <li>
            <Link className={`nav-item ${setActive(pathname, 'madeforme')}`} to='/madeforme'>
              <span className='pointer'></span>
              #made<br />
              forme
            </Link>
          </li>

        </ul>
      </nav>
    );

};

Navigation.propTypes = {
  pathname: PropTypes.string
};

export default Navigation;
