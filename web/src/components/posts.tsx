import { useEffect } from "react";
import Post from "./post";
import { fetchPosts } from "@/api/posts";
import { useStore } from "@nanostores/react";
import { $posts, setPosts } from "@/lib/store";

const Posts = () => {
  const posts = useStore($posts);

  useEffect(() => {
    fetchPosts()
      .then(data => setPosts(data))
      .catch(err => console.log(err))
  }, []) 
  
  return (
    <>
      {posts
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
        .map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </>
  );
};

export default Posts;
