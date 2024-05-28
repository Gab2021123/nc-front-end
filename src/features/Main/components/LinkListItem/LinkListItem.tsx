import React, { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}
function LinkListItem(props: Props) {
  return (
    <React.Fragment>
      <Link className="flex justify-center items-center " to={props.to}>
        {props.children}
      </Link>
    </React.Fragment>
  );
}

export default LinkListItem;
