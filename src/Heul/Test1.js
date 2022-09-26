import React, { useEffect, useState } from "react";
import LayoutKim from "./LayoutKim";
import { postListApi } from "../api/index";

const Test1 = () => {
  const [data, setData] = useState({});
  const api = async () => {
    const result = await postListApi();
    setData(result);
  };
  useEffect(() => {
    api();
  }, []);
  console.log(data);
  return (
    <LayoutKim>
      <div>heul</div>
    </LayoutKim>
  );
};

export default Test1;
