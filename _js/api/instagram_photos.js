import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';

let base = '/api/instagram_photos';

export const selectByTag = () => {

  return fetch('/assets/data/instagram_photos.json')
    .then(checkStatus);

};

export default {
  selectByTag
};
