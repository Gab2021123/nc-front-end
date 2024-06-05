import { useState } from "react";
import { motion, Variants } from "framer-motion";
import LisItemNavigation from "../../../Main/components/ListItemNavigation/LisItemNavigation";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../store/appStore";
interface IUser {
  nombre: string;
  email: string;
}
const itemsVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
    spacing: 2,
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, spacing: 2 },
};
function User(props: IUser) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logOut);
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
            to=""
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
        className="gap-[20px] absolute top-10 flex flex-wrap place-items-center right-3"
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
          className="p-2 bg-orange-500 transition-all hover:bg-orange-300 hover:text-orange-600 w-full text-neutral-100 font-semibold"
          variants={itemsVariants}
        >
          {props.nombre}
        </motion.li>
        <motion.li className="p-2 bg-orange-500 transition-all hover:bg-orange-300 hover:text-orange-600 w-full  text-neutral-100 font-semibold">
          {props.email}
        </motion.li>
        <motion.button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="p-2 bg-orange-500 transition-all hover:bg-orange-300 hover:text-orange-600 w-full  text-neutral-100 font-semibold"
        >
          Cerrar Sesión
        </motion.button>
      </motion.ul>
    </motion.nav>
  );
}

export default User;
