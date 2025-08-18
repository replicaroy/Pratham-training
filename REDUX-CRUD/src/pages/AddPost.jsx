import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Post</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <button type="submit">Add</button>
    </form>
  );
}
