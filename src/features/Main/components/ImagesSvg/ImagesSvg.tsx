import { Link } from "react-router-dom";
import svg from "./listSvg";
function ImagesSvg() {
  return (
    <>
      <div className="z-10 col-start-4 col-end-10 flex flex-row justify-between items-center ">
        {svg.map((e) => (
          <Link
            className="flex justify-center items-center w-[150px] h-[150px] bg-orange-300 rounded-[50%] shadow-2xl"
            to={e.to}
          >
            {e.icon}
          </Link>
        ))}
      </div>
    </>
  );
}

export default ImagesSvg;
