import React, { ReactElement } from "react";
import { PiMotorcycle } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import LisItemNavigation from "../ListItemNavigation/LisItemNavigation";
import { useAuthStore } from "../../../../store/appStore";
import SelectOptions from "../SelectOptions/SelectOptions";
import User from "../../../Principal/components/User/User";
function Navigation(): ReactElement<HTMLElement> {
  const { isAuth, perfil } = useAuthStore();

  return (
    <React.Fragment>
      <nav className="bg-transparent flex flex-col col-span-5 sm:px-[32px] justify-between  sm:gap-[82px] sm:col-span-full sm:grid  sm:w-full sm:grid-flow-col ">
        <div className="z-10">
          <img src="/logo.png" alt="flashfood" width={285} height={85} />
        </div>
        <div className="z-10  items-center hidden  flex-col sm:flex sm:flex-row   gap-[82px] list-none ">
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

          {isAuth ? (
            <User nombre={perfil.nombre} email={perfil.username} />
          ) : (
            <SelectOptions />
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Navigation;
