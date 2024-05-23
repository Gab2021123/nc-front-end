import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { PiMotorcycle } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
function Navigation(): ReactElement<HTMLElement> {
  return (
    <React.Fragment>
      <nav>
        <li>
          <Link to="/trabajador">
            <PiMotorcycle />
            Trabaja como repartidor
          </Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/help">
            <BiHelpCircle />
            Ayuda
          </Link>
        </li>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;
