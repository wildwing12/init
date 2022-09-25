import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostThunk } from "./actionFunc/post";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";
import Children1 from "./children-test/Children1";
import Children2 from "./children-test/Children2";

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
        <Route path="/children1" element={<Children1 />} />
        <Route path="/children2" element={<Children2 />} />
      </Routes>
    </div>
  );
};

export default App;
