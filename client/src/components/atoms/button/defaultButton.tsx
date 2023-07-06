import { FC } from "react";
import { IButton } from "../../../interface/button.interface";
const Button: FC<IButton> = ({ onClick, children, color, bg, px }) => {
  return (
    <button
      className={`py-3  rounded-lg font-bold ${bg ? bg : "bg-primary"} ${
        color ? color : "#fff"
      } ${px ? px : "px-5"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
