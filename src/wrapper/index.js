import React from "react";
import "antd/dist/antd.css";
import { GRLayout } from "../modules/layout";
import { BrowserRouter } from "react-router-dom";

const Wrapper = () => {
  return (
    <BrowserRouter>
      <GRLayout />
    </BrowserRouter>
  );
};

export default Wrapper;
