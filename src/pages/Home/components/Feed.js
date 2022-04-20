import React from "react";
import PostCard from "../../../components/PostCard";
import { makeStyles } from "@material-ui/core/styles";

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
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
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
