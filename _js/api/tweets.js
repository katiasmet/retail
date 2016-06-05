import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';

let base = '/api/tweets';

export const selectByTag = (searchString, count, resultType) => {

  let method = 'GET';

  return fetch(`${base}?search=${encodeURIComponent(searchString)}&count=${count}&result_type=${resultType}`, {method})
    .then(checkStatus);

};

export const selectByPhotos = (searchStrings, count, resultType) => {

  let method = 'GET';

  let encodedSearchStrings = [];

  searchStrings.forEach(searchString => {
    encodedSearchStrings.push(encodeURIComponent(searchString));
  });

  let query = encodedSearchStrings.join('+');
  console.log(query);

  return fetch(`${base}?search=${query}%20filter:images&count=${count}&result_type=${resultType}`, {method})
    .then(checkStatus);

};

export default {
  selectByTag,
  selectByPhotos
};
