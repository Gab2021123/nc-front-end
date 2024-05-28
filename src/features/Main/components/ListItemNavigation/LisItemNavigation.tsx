import React, { ReactElement } from "react";
import { IconType } from "react-icons/lib";
import LinkListItem from "../LinkListItem/LinkListItem";
//Componente Reutilizable

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  left?: boolean;
  rigth?: boolean;
  icon: ReactElement<IconType>;
  to: string;
  avaible?: boolean;
}

const LisItemNavigation = (props: Props) => {
  return (
    <li className={props.className}>
      {props.left && props.icon}
      {props.avaible && (
        <LinkListItem to={props.to}>{props.children}</LinkListItem>
      )}
      {props.rigth && props.icon}
    </li>
  );
};
export default LisItemNavigation;
