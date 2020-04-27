import { CREATE_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, REQUEST_POSTS } from './actionTypes';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
};

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
};

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
};

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000)
  };
};

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
};

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }
};
