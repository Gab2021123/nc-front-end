import React from "react";

import Polygn from "../../Main/components/Polygn/Polygn";
import Panel from "../../Main/components/Panel/Panel";
import ImagesSvg from "../../Main/components/ImagesSvg/ImagesSvg";
import Footer from "../../Main/components/Footer/Footer";
import ImageComponents from "../../Main/components/Images/ImageComponent";
import { images } from "../../Main/utils/images";
import { Swiper } from "swiper/react";
import Header from "../../Main/components/Header/Header";

/* import { Slide } from "react-toastify"; */
function Main() {
  return (
    <React.Fragment>
      <div className="  relative grid  grid-cols-12  gap-y-[50px] place-items-center ">
        <Polygn />
        <Header />
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
              className="w-[275px] h-[275px] relative "
            />
          ))}
        </Swiper>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Main;
