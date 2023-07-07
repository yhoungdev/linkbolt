import { FC } from "react";
import { IButton } from "../../../interface/components";

const Button: FC<IButton> = ({ children, onClick, type, bg }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        bg ? bg : "bg-primary"
      } py-2.5 font-bold  text-white w-full my-[8px]`}
    >
      {children}
    </button>
  );
};
export default Button;
