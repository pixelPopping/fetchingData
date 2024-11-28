import { useEffect, useState } from "react";

export const UserDetail = ({ user }) => {
  const [posts, setPosts] = useState([]); // initialize with an empty array

  useEffect(() => {
    let ignore = false;
    setPosts([]);
    const fetchPost = async () => {
      const response = await fetch(
        `http://localhost:3000/posts?userId=${user.id}`
      );
      const data = await response.json();
      if (!ignore) {
        setPosts(data);
      } // update the state with fetched posts
    };
    fetchPost();
    return () => {
      ignore = true;
    };
  }, [user.id]); // add user.id as dependency to refetch when user changes

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
