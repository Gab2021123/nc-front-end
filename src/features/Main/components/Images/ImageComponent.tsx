import { Link } from "react-router-dom";

export interface ImageComponent {
  label: string;
  source: string;
  title: string;
  to: string;
  contrast: number;
  saturate: number;
}
function ImageComponents(props: ImageComponent) {
  return (
    <>
      <Link to={props.to} className="w-[275px] h-[275px] relative ">
        <label
          className="absolute top-0 z-10 left-[15px] p-[2px] font-bold text-white text-[24pt]  "
          htmlFor="image"
        >
          {props.label}
        </label>
        <img
          className={` w-full h-full rounded-[50px] object-cover contrast-${props.contrast} saturate-${props.saturate} transition-all size-[100%] hover:size-[115%] `}
          src={props.source}
          id="image"
          alt={props.title}
        />
      </Link>
    </>
  );
}

export default ImageComponents;
