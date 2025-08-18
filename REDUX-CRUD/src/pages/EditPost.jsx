import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const post = useSelector(state => state.posts.find(p => p.id === parseInt(id)));
  const [title, setTitle] = useState(post ? post.title : "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id: parseInt(id), title }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
}
