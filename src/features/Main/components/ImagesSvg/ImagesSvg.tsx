import { Link } from "react-router-dom";
import svg from "./listSvg";
function ImagesSvg() {
  return (
    <>
      <section className="z-8 grid grid-cols-2 grid-rows-2 col-span-full place-items-center  sm:col-start-4 sm:col-end-10 sm:flex sm:gap-x-7  justify-between items-center  ">
        {svg.map((e) => (
          <Link
            key={e.id}
            className="flex justify-center items-center w-[150px] h-[150px] bg-orange-300 rounded-[50%] shadow-2xl"
            to={e.to}
          >
            {e.icon}
          </Link>
        ))}
      </section>
    </>
  );
}

export default ImagesSvg;
