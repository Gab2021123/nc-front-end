import LinkListItem from "../LinkListItem/LinkListItem";
import { PiHamburgerThin } from "react-icons/pi";
function ImagesSvg() {
  return (
    <>
      <LinkListItem to="/burger" className="">
        <PiHamburgerThin />
      </LinkListItem>
      <LinkListItem to="/burger" className="">
        <PiHamburgerThin />
      </LinkListItem>
      <LinkListItem to="/burger" className="">
        <PiHamburgerThin />
      </LinkListItem>
      <LinkListItem to="/burger" className="">
        <PiHamburgerThin />
      </LinkListItem>
    </>
  );
}

export default ImagesSvg;
