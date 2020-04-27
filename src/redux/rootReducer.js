import { combineReducers } from "redux";
import { CREATE_POST, FETCH_POST } from './actionTypes';
import { appReducer } from './appReducer';

const initialPostsState = {
  posts: [],
  fetchedPosts: [],
};
const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case CREATE_POST: 
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload
        ]
      }
    case FETCH_POST: 
      return { ...state, fetchedPosts: action.payload }
    default: return state;
  }
}

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
});

