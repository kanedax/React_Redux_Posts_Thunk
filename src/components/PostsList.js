import React, { useEffect } from "react";
import SearchPost from "./SearchPost";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../redux/actions/postActions";

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);
  const { loading, error, posts, post } = useSelector((data) => (data));

  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>{`Total Posts ${posts.length}`}</h1>
        {loading ? (
          <h2>loading...</h2>
        ) : error ? (
          <h2>{error.response.status===404 ? "the post id is invalid" : error.message}</h2>
        ) : (
          posts.map((i) => (
            <div className="post-details" key={i.id}>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostsList;
