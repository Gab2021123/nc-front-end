import { PiHamburgerThin, PiPizzaThin } from "react-icons/pi";

import { MdOutlineOutdoorGrill } from "react-icons/md";
import { GiChickenLeg } from "react-icons/gi";
interface Svg {
  icon: React.ReactNode;
  to: string;
}
const svg: Svg[] = [
  {
    icon: <PiHamburgerThin size={75} />,
    to: "burger",
  },
  {
    icon: <PiPizzaThin size={75} />,
    to: "pizza",
  },
  {
    icon: <MdOutlineOutdoorGrill size={75} />,
    to: "parrilla",
  },
  { icon: <GiChickenLeg size={75} />, to: "pollo" },
];
export default svg;
