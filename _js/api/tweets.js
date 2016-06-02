import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';

let base = '/api/tweets';

export const selectByTag = (searchString, count) => {

  let method = 'GET';

  return fetch(`${base}?search=${searchString}&count=${count}`, {method})
    .then(checkStatus);

};

export default {
  selectByTag
};
