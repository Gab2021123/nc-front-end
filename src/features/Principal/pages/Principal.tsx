import React from "react";

import Footer from "../../Main/components/Footer/Footer";
import ImageComponents from "../../Main/components/Images/ImageComponent";
import ImagesSvg from "../../Main/components/ImagesSvg/ImagesSvg";
import Panel from "../../Main/components/Panel/Panel";
import Polygn from "../../Main/components/Polygn/Polygn";
import { images } from "../../Main/utils/images";
import Navigation from "../../Main/components/Navigation/Navigation";
import { Swiper } from "swiper/react";

/* import NavigationPrincipal from "../components/NavigationPrincipal/NavigationPrincipal"; */

function Principal() {
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

export default Principal;
