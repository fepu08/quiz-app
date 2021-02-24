import { SET_NAME, SET_SCORE, CLEAR_USER } from './types';

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name
  };
};

export const setScore = (score) => {
  return {
    type: SET_SCORE,
    payload: score
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER
  };
};
