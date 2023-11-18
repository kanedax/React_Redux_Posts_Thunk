import axios from "axios";
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  SEARCH_POST_ERROR,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "./postActionTypes";

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsError = (error) => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: error,
  };
};

export const fetchPostsAction = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostsError(error));
    }
  };
};

const fetchPostRequest = () => {
  return {
    type: SEARCH_POST_REQUEST,
  };
};
const fetchPostSuccess = (post) => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: post,
  };
};
const fetchPostError = (error) => {
  return {
    type: SEARCH_POST_ERROR,
    payload: error,
  };
};
export const fetchPostAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch(fetchPostSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostError(error));
    }
  };
};
