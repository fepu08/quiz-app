import {
  SET_NAME,
  SET_SCORE,
  CLEAR_USER,
  SET_CURRENT_ANSWER,
  CLEAR_CURRENT_ANSWER
} from '../actions/types';

const initialState = {
  name: '',
  score: 0,
  currentAnswer: null
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
    case SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: action.payload
      };
    case CLEAR_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: null
      };
    case CLEAR_USER:
      return {
        name: '',
        score: 0,
        currentAnswer: null
      };
    default:
      return state;
  }
};
