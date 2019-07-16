import { FETCH_POST, NEW_POST } from "./types";

export const fetchPost = () => async dispatch => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();
  dispatch({
    type: FETCH_POST,
    payload: posts
  });
};

export const createPost = postData => async dispatch => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  });
  const post = await res.json();
  dispatch({
    type: NEW_POST,
    payload: post
  });
};
