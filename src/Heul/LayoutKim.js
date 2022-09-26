import React, { Children } from "react";
import { Link } from "react-router-dom";

const LayoutKim = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/heul">test1</Link>
        </li>
        <li>
          <Link to="/heul2">test2</Link>
        </li>
        <li>test3</li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default LayoutKim;
