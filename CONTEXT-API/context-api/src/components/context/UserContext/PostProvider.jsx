import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [post, setPost] = useState();


  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
export const usePost = () => useContext(PostContext);
