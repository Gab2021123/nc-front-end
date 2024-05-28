import React, { ReactElement /* , useState */ } from "react";

import { PiMotorcycle } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import LisItemNavigation from "../ListItemNavigation/LisItemNavigation";
import { FaUser, FaShoppingCart } from "react-icons/fa";
/* import { MdOutlineMenu } from "react-icons/md"; */
function Navigation(): ReactElement<HTMLElement> {
  /* const [icon, setIcon] = useState(false); */
  return (
    <React.Fragment>
      <nav className="bg-orange-50 z-10 justify-center items-center col-span-12 flex-col p-[10px] flex gap-[82px] sm:flex sm:gap-[82px] sm:flex-row list-none ">
        <LisItemNavigation
          to="/login"
          icon={
            <PiMotorcycle className="w-[23px] h-[23px] flex justify-center items-center cursor-pointer " />
          }
          className=" h-[46px] p-2 gap-2 bg-orange-200 flex flex-row justify-center items-center rounded-full hover:bg-orange-400 transition-all"
          avaible={true}
        >
          Iniciar Sesión
        </LisItemNavigation>
        <LisItemNavigation
          to="/trabajador"
          icon={
            <MdOutlineWork className="w-[23px] h-[23px] flex justify-center items-center cursor-pointer" />
          }
          left={true}
          rigth={false}
          className=" h-[46px] p-2 gap-2 bg-orange-200 flex flex-row justify-center items-center rounded-full  hover:bg-orange-400 transition-all"
          avaible={true}
        >
          Trabaja como repartidor
        </LisItemNavigation>
        <LisItemNavigation
          to="/help"
          icon={
            <BiHelpCircle className="w-[23px] h-[23px] flex justify-center items-center " />
          }
          left={true}
          rigth={false}
          className=" h-[46px] p-2 gap-2 bg-orange-200 flex flex-row justify-center items-center rounded-full hover:bg-orange-400 transition-all"
          avaible={true}
        >
          Ayuda
        </LisItemNavigation>
        <LisItemNavigation
          to="/help"
          icon={
            <FaUser
              width={23}
              height={23}
              className="w-[23px] h-[23px] flex justify-center items-center "
            />
          }
          left={true}
          rigth={false}
          className=" h-[46px] w-[46px]  gap-2 bg-orange-200 flex items-center justify-center rounded-full hover:bg-orange-400 transition-all cursor-pointer"
        ></LisItemNavigation>
        <LisItemNavigation
          className=" h-[46px] w-[46px]  gap-2 bg-orange-200 flex items-center justify-center rounded-full hover:bg-orange-400 transition-all cursor-pointer"
          to="/carBuy"
          icon={
            <FaShoppingCart
              width={23}
              height={23}
              className="w-[23px] h-[23px] flex justify-center items-center "
            />
          }
          left={true}
        ></LisItemNavigation>
      </nav>
    </React.Fragment>
  );
}
export default Navigation;
