import { SET_NAME, SET_SCORE, CLEAR_USER } from '../actions/types';

const initialState = {
  name: '',
  score: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.payload
      };
    case CLEAR_USER:
      return {
        name: '',
        score: 0
      };
    default:
      return state;
  }
};
