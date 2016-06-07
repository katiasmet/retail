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

export const selectOpeningHoursByStoreId = (id) => {
  return fetch(`${base}/${id}?opening_hours=true`)
    .then(checkStatus);
};

export const selectTagsByStoreId = (id) => {
  return fetch(`${base}/${id}?tags=true`)
    .then(checkStatus);
};

export const selectCreationStepsByStoreId = (id) => {
  return fetch(`${base}/${id}?creation_steps=true`)
    .then(checkStatus);
};

export default {
  selectAllExceptCurrent,
  selectById,
  selectByLocation,
  selectOpeningHoursByStoreId,
  selectTagsByStoreId,
  selectCreationStepsByStoreId
};
