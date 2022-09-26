import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostThunk } from "./actionFunc/post";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";
import Song from "./Song";
import Children1 from "./children-test/Children1";
import Children2 from "./children-test/Children2";
import Test1 from "./Heul/test1";
import LayoutKim from "./Heul/LayoutKim";
import Test2 from "./Heul/Test2";

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
        <Route path="/song" element={<Song />} />
        <Route path="/layoutKim" element={<LayoutKim />} />
        <Route path="/heul" element={<Test1 />} />
        <Route path="/heul2" element={<Test2 />} />
        <Route path="/children1" element={<Children1 />} />
        <Route path="/children2" element={<Children2 />} />
      </Routes>
    </div>
  );
};

export default App;
