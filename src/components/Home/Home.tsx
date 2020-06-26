import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/sample">Go to sample Page</Link>
    </div>
  );
};
