import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      console.log('remove alert');
      console.log(action.payload);
      return state.filter((alert) => alert.id !== action.payload.id);
    default:
      return state;
  }
};
