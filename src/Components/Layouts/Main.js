import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
const Main = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      {/* <Banner /> */}
    </>
  );
};
export default Main;
