import React, { ReactElement } from "react";
import { PiMotorcycle } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import LisItemNavigation from "../ListItemNavigation/LisItemNavigation";
import { useAuthStore } from "../../../../store/appStore";
import SelectOptions from "../SelectOptions/SelectOptions";
import User from "../../../Principal/components/User/User";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import "./Navigation.css";
function Navigation(): ReactElement<HTMLElement> {
  const { isAuth, perfil } = useAuthStore();
  return (
    <React.Fragment>
      <nav className="z-10 " id="navigation_element">
        <ul className="navigation navigator" id="navigation">
          <LisItemNavigation
            to="/about"
            icon={
              <PiMotorcycle className="w-[23px] h-[23px] sm:flex sm:justify-center hidden sm:items-center cursor-pointer " />
            }
            avaible={true}
            className="font-semibold text-[18pt]"
          >
            Sobre Nosotros
          </LisItemNavigation>
          <LisItemNavigation
            to="/productlist"
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
            to="/contact"
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
          <Link to="/shoppingcart">
            <CgShoppingCart className="w-[23px] h-[23px] flex justify-center items-center hover:fill-slate-900 cursor-pointer" />
          </Link>
          {isAuth && (
            <Link to="/postproduct">
              <FaCartPlus className="w-[23px] h-[23px] flex justify-center items-center hover:fill-slate-900 cursor-pointer" />
            </Link>
          )}

          {isAuth ? (
            <User nombre={perfil.nombre} email={perfil.username} />
          ) : (
            <SelectOptions />
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default Navigation;
