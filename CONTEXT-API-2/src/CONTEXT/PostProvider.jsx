import React, { useContext, useEffect, useState, createContext } from "react";
const PostContext = createContext();
export const usePost = () => useContext(PostContext);
const PostProvider = ({ children }) => {  
  
  const [postData, setPostData] = useState(JSON.parse(localStorage.getItem("postData")) || null);

  useEffect(() => {
    if (postData?.length) {
      localStorage.setItem("postData", JSON.stringify(postData));
    }
  }, [postData]);

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;