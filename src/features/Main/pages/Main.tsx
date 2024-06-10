import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Polygn from "../components/Polygn/Polygn";
import Panel from "../components/Panel/Panel";
import ImagesSvg from "../components/ImagesSvg/ImagesSvg";
import Footer from "../components/Footer/Footer";
import ImageComponents from "../components/Images/ImageComponent";
import { images } from "../utils/images";
import { Swiper } from "swiper/react";

/* import { Slide } from "react-toastify"; */
function Main() {
  return (
    <React.Fragment>
      <div className="  relative grid  grid-cols-12  gap-y-[50px] place-items-center ">
        <Polygn />
        <Navigation />
        <Panel />
        <ImagesSvg />

        <Swiper className="grid col-span-full  gap-3 grid-flow-row sm:grid-flow-col place-items-center">
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
        </Swiper>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Main;
