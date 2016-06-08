import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';
import {basename} from '../globals';

let base = `${basename}/api/locations`;

export const getDistance = (lat1, long1, lat2, long2) => {

  let method = 'GET';

  return fetch(`${base}?lat1=${lat1}&long1=${long2}&lat2=${lat2}&long2=${long2}`, {method})
    .then(checkStatus);

};

export default {
  getDistance
};
