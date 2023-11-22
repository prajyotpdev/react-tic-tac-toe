import React from "react";
import { Outlet } from "react-router-dom";
import Quote from "../../components/quote/Quote";

const Body = () => {
  return (
    <>
      <Quote />
      <div className="screen">
          <Outlet />
      </div>
    </>
  );
};

export default Body;
