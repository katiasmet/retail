import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';

export const selectAll = () => {

  return fetch('/assets/data/stores.json')
    .then(checkStatus);

};

export default {
  selectAll
};
