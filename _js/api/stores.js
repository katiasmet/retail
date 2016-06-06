import fetch from 'isomorphic-fetch';
import {checkStatus} from '../util';

let base = '/api/stores';

export const selectAllExceptCurrent = (id) => {
  let method = 'GET';
  return fetch(`${base}`, {method})
    .then(checkStatus);
};

export const selectById = (id) => {
  let method = 'GET';
  return fetch(`${base}/${id}`, {method})
    .then(checkStatus);
};

export const selectByLocation = (latitude, longitude) => {
  let method = 'GET';
  return fetch(`${base}?latitude=${latitude}&longitude=${longitude}`, {method})
    .then(checkStatus);
};

export const selectOpeningHoursByStoreId = (id) => {
  let method = 'GET';
  return fetch(`${base}/${id}?opening_hours=true`, {method})
    .then(checkStatus);
};

export const selectTagsByStoreId = (id) => {
  let method = 'GET';
  return fetch(`${base}/${id}?tags=true`, {method})
    .then(checkStatus);
};

export const selectCreationStepsByStoreId = (id) => {
  let method = 'GET';
  return fetch(`${base}/${id}?creation_steps=true`, {method})
    .then(checkStatus);
};

export default {
  selectAll,
  selectById,
  selectByLocation,
  selectOpeningHoursByStoreId,
  selectTagsByStoreId,
  selectCreationStepsByStoreId
};
