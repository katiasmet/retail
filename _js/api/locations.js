import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';

let base = '/api/locations';

export const getDistance = (origLat, origLong, destLat, destLong) => {

  let method = 'GET';

  return fetch(`${base}?origLat=${origLat}&origLong=${origLong}&destLat=${destLat}&destLong=${destLong}`, {method})
    .then(checkStatus);

};

export default {
  getDistance
};
