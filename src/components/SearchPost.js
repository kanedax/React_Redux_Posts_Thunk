import React, { useState } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostAction } from "../redux/actions/postActions";
const SearchPost = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search === ''){
      return alert('search field cant be empty')
    }else{
      dispatch(fetchPostAction(search));
    }
  };
  const {} = useSelector((data) => data);

  return (
    <div className="form-header">
      <div>
        <h2>React Redux Project</h2>
        <p>
          This project is a simple React Redux project that fetches data with
          search functionality from an API
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a post"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPost;
