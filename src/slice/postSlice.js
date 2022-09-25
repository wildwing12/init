import { createSlice } from "@reduxjs/toolkit";
import { getPostThunk } from "../actionFunc/post";

const initialState = {};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostThunk.pending, (state, action) => {
      state.pending = true;
    });
    builder.addCase(getPostThunk.fulfilled, (state, action) => {
      debugger;
      state.pending = false;
      state.data = action.payload;
    });
    builder.addCase(getPostThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

//export {} = postSlice.actions;
export default postSlice.reducer;
