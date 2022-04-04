import React from "react";
import PostCard from "../../../components/PostCard";

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Fernando Marques",
      username: "fmrqs",
      avatar: "images/avatars/black.jpg",
    },
    place: "Centro de Informática",
    text: "anyText",
    date: "April 02, 2022",
    image: "images/posts/post.jpg",
  },
];

function Feed() {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
