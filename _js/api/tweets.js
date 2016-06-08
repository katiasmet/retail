import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';
import {basename} from '../globals';

let base = `${basename}/api/tweets`;

export const selectBySearch = (searchString, count, resultType) => {

  return fetch(`${base}?search=${encodeURIComponent(searchString)}&count=${count}&result_type=${resultType}`)
    .then(checkStatus);

};

export const selectByUser = (screenName, count) => {

  return fetch(`${base}?screen_name=${encodeURIComponent(screenName)}&count=${count}`)
    .then(checkStatus);

};


export const selectByPhotos = (searchStrings, count, resultType) => {

  let encodedSearchStrings = [];

  searchStrings.forEach(searchString => {
    encodedSearchStrings.push(encodeURIComponent(searchString));
  });

  let query = encodedSearchStrings.join('+');

  return fetch(`${base}?search=${query}%20filter:images&count=${count}&result_type=${resultType}`)
    .then(checkStatus);

};

export default {
  selectBySearch,
  selectByUser,
  selectByPhotos
};
