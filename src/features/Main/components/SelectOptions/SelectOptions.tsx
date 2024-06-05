import { useState } from "react";
import { motion, Variants } from "framer-motion";
import LisItemNavigation from "../ListItemNavigation/LisItemNavigation";
import { FaUser } from "react-icons/fa";
import LinkListItem from "../LinkListItem/LinkListItem";

const itemsVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
function SelectOptions() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="drop-shadow-menu flex flex-col p-0 m-0 gap-5 justify-center items-center relative"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center"
      >
        <motion.div
          variants={{ open: { rotate: 180 }, close: { rotate: 0 } }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <LisItemNavigation
            to="/shoppingcart"
            icon={
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              >
                <FaUser
                  width={23}
                  height={23}
                  className="w-[23px] h-[23px] flex justify-center items-center "
                />
              </motion.div>
            }
            left={true}
            rigth={false}
            avaible={true}
            className="font-semibold text-[18pt] cursor-pointer"
          ></LisItemNavigation>
        </motion.div>
      </motion.button>

      <motion.ul
        className="gap-[2px] absolute top-10 right-0"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 90% 50% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li
          className="p-2 bg-orange-500 transition-all hover:bg-orange-300 hover:text-orange-600 w-[150px] text-neutral-100 font-semibold"
          variants={itemsVariants}
        >
          <LinkListItem to="/login">Iniciar Sesión</LinkListItem>
        </motion.li>
        <motion.li className="p-2 bg-orange-500 transition-all hover:bg-orange-300 hover:text-orange-600 w-[150px]  text-neutral-100 font-semibold">
          <LinkListItem to="/register">Registrar</LinkListItem>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default SelectOptions;
