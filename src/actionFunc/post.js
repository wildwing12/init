import { createAsyncThunk } from "@reduxjs/toolkit";
import { postListApi } from "../api";

export const getPostThunk = createAsyncThunk("post/list", (param, thunkAPI) => {
  console.log(thunkAPI);
  const posts = postListApi();
  console.log(posts);
  return posts;
});
