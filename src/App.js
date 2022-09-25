import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostThunk } from "./actionFunc/post";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";

const App = () => {
  const { post } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostThunk());
  }, []);
  console.log(post);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
