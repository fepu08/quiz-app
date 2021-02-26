import {
  SET_NAME,
  SET_SCORE,
  CLEAR_USER,
  SET_CURRENT_ANSWER,
  CLEAR_CURRENT_ANSWER
} from './types';

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

export const setCurrentAnswer = (answer) => {
  return {
    type: SET_CURRENT_ANSWER,
    payload: answer
  };
};

export const clearCurrentAnswer = () => {
  return {
    type: CLEAR_CURRENT_ANSWER
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER
  };
};
