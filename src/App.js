import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPostThunk } from "./actionFunc/post";

const App = () => {
  const { post } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostThunk());
  }, []);
  console.log(post);
  return (
    <div>
      <ul>
        <li>1234</li>
        <li>1234</li>
        <li>1234</li>
        <li>1234</li>
      </ul>
    </div>
  );
};

export default App;
