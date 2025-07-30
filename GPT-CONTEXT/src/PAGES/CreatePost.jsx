import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import { useLogin } from "../CONTEXT/LoginUserProvider";
import { usePost } from "../CONTEXT/PostProvider";


const INITIAL_FORM_VALUE = {
  title: "",
  body: "",
  author: "",
};

const CreatePost = () => {
  const { userLogin } = useLogin();
  const { setPostData } = usePost();
  
  const navigate = useNavigate();
  const [createPost, setCreatePost] = useState(INITIAL_FORM_VALUE);

  useEffect(() => {
    if (userLogin?.fname) {
      setCreatePost((prev) => ({
        ...prev,
        author: userLogin.fname,
      }));
    }
  }, [userLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatePost((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newArr = {};
    if (!createPost?.title) newArr.title = "Please fill in the title";
    if (!createPost?.body) newArr.body = "Please fill in the body";
    // if (!createPost?.author) newArr.author = "Author is missing";
    return newArr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newArrError = validate();
    if (Object.keys(newArrError).length > 0) {
      const firstError = Object.values(newArrError).find((err) => err);
      toast.error(firstError);
    } else {
      setPostData((prev) => [...prev, createPost]);
      setCreatePost(INITIAL_FORM_VALUE);
      navigate("/post");
      toast.success("Post created successfully!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={createPost.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Body
            </label>
            <textarea
              name="body"
              value={createPost.body}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Write something..."
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={userLogin.username}
               onChange={handleChange}
              // readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition-all"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
