import {
  GET_QUESTIONS,
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  SET_CURRENT_QUESTION,
  CLEAR_CURRENT_QUESTION,
  QUESTIONS_ERROR,
  SEARCH_QUESTION
} from './types';
import { my_json_server } from '../config';

export const getQuestions = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${my_json_server}/questions`);
    const data = await res.json();
    dispatch({
      type: GET_QUESTIONS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addQuestion = (question) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${my_json_server}/questions`, {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_QUESTION,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`${my_son_server}/questions/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_QUESTION,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const updateQuestion = (question) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${my_json_server}/questions/${question.id}`, {
      method: 'PUT',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    dispatch({
      type: UPDATE_QUESTION,
      payload: question
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const searchQuestion = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${my_json_server}/questions?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_QUESTION,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: QUESTIONS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setCurrent = (question) => {
  return {
    type: SET_CURRENT_QUESTION,
    payload: question
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT_QUESTION
  };
};
