import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const setActive = (pathname, name) => {
  return (`/leftscreen/${name}` === pathname) ? 'active' : '';
};

const setTransformY = (pathname, name) => { //if made for me is active, add transform
  return (`/leftscreen/${name}` === pathname) ? 'transform' : '';
};

const Navigation = ({pathname}) => {

  return (
      <nav className='left-nav'>
        <ul>
          <li>
            <Link className={`nav-item nav-byme ${setActive(pathname, 'madebyme')}`} to='/leftscreen/madebyme'>
              <span className='pointer'></span>
              #madebyme
            </Link>
          </li>

          <li>
            <Link className={`nav-item nav-forme ${setActive(pathname, 'madeforme')}`} to='/leftscreen/madeforme'>
              <span className='pointer'></span>
              #madeforme
            </Link>
          </li>

          <li>
            <Link className={`nav-item nav-about ${setTransformY(pathname, 'madeforme')} ${setActive(pathname, 'aboutme')}`} to='/leftscreen/aboutme'>
              <span className='pointer'></span>
              aboutme
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
