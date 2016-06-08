import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';

let base = '/api/stores';

export const selectAllExceptCurrent = (id) => {
  return fetch(`${base}?current=${id}`)
    .then(checkStatus);
};

export const selectById = (id) => {
  return fetch(`${base}/${id}`)
    .then(checkStatus);
};

export const selectByLocation = (latitude, longitude) => {
  return fetch(`${base}?latitude=${latitude}&longitude=${longitude}`)
    .then(checkStatus);
};

export const selectItemsByStoreId = (id, items) => {
  return fetch(`${base}/${id}?${items}=true`)
    .then(checkStatus);
};


export default {
  selectAllExceptCurrent,
  selectById,
  selectByLocation,
  selectItemsByStoreId
};
