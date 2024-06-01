import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Polygn from "../components/Polygn/Polygn";
import Panel from "../components/Panel/Panel";
import ImagesSvg from "../components/ImagesSvg/ImagesSvg";
import Footer from "../components/Footer/Footer";
import ImageComponents from "../components/Images/ImageComponent";
import { images } from "../utils/images";
function Main() {
  return (
    <React.Fragment>
      s
      <div className="max-w-full min-h-screen relative grid grid-row-12 sm:grid-cols-12  gap-[50px]">
        <Polygn />
        <Navigation />
        <Panel />
        <ImagesSvg />
        <div className="grid col-span-full grid-flow-row sm:grid-flow-col place-items-center">
          {images.map((e, index) => (
            <ImageComponents
              saturate={150}
              contrast={50}
              key={index}
              label={e.label}
              source={e.source}
              title={e.title}
              to={e.to}
            />
          ))}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Main;
