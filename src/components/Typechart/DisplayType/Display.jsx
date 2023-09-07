import image from "../../../assets/pokeball.svg";
import { memo } from "react";

const Display = ({ src, types, name }) => {
  const displayTypes = Object.keys(types);
  if (src === "") {
    return (
      <div
        className="w-24 max-w-48 bg-auto bg-no-repeat bg-center h-56"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    );
  }
  return (
    <div
      className="flex flex-col justify-between transition-all duration-100 rounded-md items-center max-w-48 bg-auto bg-no-repeat bg-center h-56 hover:outline-stone-500 hover:outline p-2"
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="capitalize">{name}</p>
      <div className="w-auto">
        <img src={src} alt={name} className="" />
      </div>
      <div className="flex flex-col justify-end">
        <p className="text-center capitalize">
          {displayTypes[0]}
          {displayTypes[1] ? " / " + displayTypes[1] : ""}
        </p>
      </div>
    </div>
  );
};
export default memo(Display);
