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
    to: "burger",
  },
  {
    id: 2,
    icon: <PiPizzaThin size={75} />,
    to: "pizza",
  },
  {
    id: 3,
    icon: <MdOutlineOutdoorGrill size={75} />,
    to: "beef",
  },
  { id: 4, icon: <GiChickenLeg size={75} />, to: "chiken" },
];
export default svg;
