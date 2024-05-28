import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Polygn from "../components/Polygn/Polygn";

function Main() {
  return (
    <React.Fragment>
      <div className="max-w-full  relative grid grid-cols-12 ">
        <Navigation />
        <Polygn />
      </div>
    </React.Fragment>
  );
}

export default Main;
