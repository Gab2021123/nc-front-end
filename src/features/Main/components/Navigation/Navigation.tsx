import React, { ReactElement } from "react";
import { PiMotorcycle } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import LisItemNavigation from "../ListItemNavigation/LisItemNavigation";
import SelectOptions from "../SelectOptions/SelectOptions";
function Navigation(): ReactElement<HTMLElement> {
  return (
    <React.Fragment>
      <nav className="bg-transparent flex flex-col col-span-6 sm:px-[32px] justify-between sm:flex sm:gap-[82px] sm:col-span-12 sm:flex-row ">
        <div>
          <img src="/public/logo.jpg" alt="" />
        </div>
        <div className="z-10  items-center  flex-col sm:flex sm:flex-row  flex gap-[82px] list-none ">
          <LisItemNavigation
            to="/about"
            icon={
              <PiMotorcycle className="w-[23px] h-[23px] flex justify-center items-center cursor-pointer " />
            }
            avaible={true}
            className="font-semibold text-[18pt]"
          >
            Sobre Nosotros
          </LisItemNavigation>
          <LisItemNavigation
            to="/productslist"
            icon={
              <MdOutlineWork className="w-[23px] h-[23px] flex justify-center items-center cursor-pointer" />
            }
            left={false}
            rigth={false}
            avaible={true}
            className="font-semibold text-[18pt]"
          >
            Galeria
          </LisItemNavigation>
          <LisItemNavigation
            to="/help"
            icon={
              <BiHelpCircle className="w-[23px] h-[23px] flex justify-center items-center " />
            }
            left={false}
            rigth={false}
            avaible={true}
            className="font-semibold text-[18pt]"
          >
            Contacto
          </LisItemNavigation>

          <SelectOptions />
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Navigation;
