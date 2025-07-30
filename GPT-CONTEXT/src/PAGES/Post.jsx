import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePost } from '../CONTEXT/PostProvider';
import { useLogin } from '../CONTEXT/LoginUserProvider'; // For logout
import toast from "react-hot-toast";
import Navbar from './Navbar';

const Post = () => {
  const navigate = useNavigate();
  const { postData, setPostData } = usePost();
  const { setUserLogin } = useLogin();

  // Delete post by index
  const handleDelete = (indexToDelete) => {
    setPostData((prevPosts) => prevPosts.filter((_, i) => i !== indexToDelete));
    toast.success('post delted successfully')
  };

  // Logout handler
  const handleLogout = () => {
    setUserLogin(null);   // Clear logged in user
    navigate('/login');   // Redirect to login page
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all"
            onClick={() => navigate("/Createpost")}
          >
            Create Post
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition-all"
          >
            Logout
          </button>
        </div>

        {postData.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No posts found !!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {postData.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    📝 Title: <span className="font-normal">{item?.title}</span>
                  </p>
                  <p className="text-gray-700 mb-2">
                    📄 Body: <span className="font-medium">{item?.body}</span>
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    ✍️ Author: {item?.author}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(index)}
                  className="mt-4 px-2 py-1 rounded-md  transition-colors self-start border-1 hover:bg-red-100 "
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
