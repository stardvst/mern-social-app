import React from "react";
import Post from "./Post/Post";
//import useStyles from "./styles.js";
import { useSelector } from "react-redux";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
 // const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
}
