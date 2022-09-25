import React from "react";
import { Link } from "react-router-dom";

const Home = ({ children }) => {
  return (
    <div className="bg-green-500">
      <ul>
        <li>
          <Link to="/children1">children1</Link>
        </li>
        <li>
          <Link to="/children2">children2</Link>
        </li>
        <li>1234</li>
        <li>1234</li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Home;
