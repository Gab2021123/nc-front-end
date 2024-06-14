import React, { HTMLAttributes } from "react";
import Navigation from "../Navigation/Navigation";
import LisItemNavigation from "../ListItemNavigation/LisItemNavigation";
import BoxIcon from "../Box-Icon/Box-Icon";
interface Props extends HTMLAttributes<HTMLElement> {}
function Header(props: Props) {
  return (
    <React.Fragment>
      <header
        className={`${props.className} bg-transparent  flex flex-row col-span-5 sm:px-[32px] justify-between items-center w-full  sm:gap-[82px] sm:col-span-full sm:grid  sm:w-full sm:grid-flow-col `}
      >
        <BoxIcon />
        <div className="z-10">
          <LisItemNavigation
            to="/"
            icon={""}
            avaible={true}
            left={false}
            rigth={false}
            className="font-semibold list-none "
          >
            <img src="/logo.png" alt="flashfood" width={285} height={285} />
          </LisItemNavigation>
        </div>
        <Navigation />
      </header>
    </React.Fragment>
  );
}

export default Header;
