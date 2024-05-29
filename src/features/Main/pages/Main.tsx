import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Polygn from "../components/Polygn/Polygn";
import Panel from "../components/Panel/Panel";
import ImagesSvg from "../components/ImagesSvg/ImagesSvg";

function Main() {
  return (
    <React.Fragment>
      <div className="max-w-full relative grid grid-cols-12  gap-[50px]">
        <Polygn />
        <Navigation />
        <Panel />
        <ImagesSvg />
      </div>
    </React.Fragment>
  );
}

export default Main;
