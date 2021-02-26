import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (alert) => {
  return {
    type: SET_ALERT,
    payload: { id: uuidv4(), ...alert }
  };
};

export const removeAlert = (alert) => {
  return {
    type: REMOVE_ALERT,
    payload: alert
  };
};
