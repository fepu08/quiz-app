import {
  GET_QUESTIONS,
  SEARCH_QUESTION,
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  SET_CURRENT_QUESTION,
  CLEAR_CURRENT_QUESTION,
  QUESTIONS_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  questions: null,
  current: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
        loading: false
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.payload
        ),
        loading: false
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === action.payload.id ? action.payload : question
        ),
        loading: false
      };
    case SEARCH_QUESTION:
      return {
        ...state,
        questions: action.payload
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_QUESTION:
      return {
        ...state,
        current: null
      };
    case QUESTIONS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
