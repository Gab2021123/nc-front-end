import { PiHamburgerThin, PiPizzaThin } from "react-icons/pi";

import { MdOutlineOutdoorGrill } from "react-icons/md";
import { GiChickenLeg } from "react-icons/gi";
interface Svg {
  id: number;
  icon: React.ReactNode;
  to: string;
}
const svg: Svg[] = [
  {
    id: 1,
    icon: <PiHamburgerThin size={75} />,
    to: "productlist/burger",
  },
  {
    id: 2,
    icon: <PiPizzaThin size={75} />,
    to: "productlist/pizza",
  },
  {
    id: 3,
    icon: <MdOutlineOutdoorGrill size={75} />,
    to: "productlist/carne",
  },
  { id: 4, icon: <GiChickenLeg size={75} />, to: "productlist/pollo" },
];
export default svg;
