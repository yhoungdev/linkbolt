import { FC } from "react";
import { IButton } from "../../../interface/components";

const Button: FC<IButton> = ({ children, onClick, type, bg, loading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: type === "submit" ? "#F46412" : "#F46412",
      }}
      className={`${
        bg ? bg : "bg-primary"
      } py-2.5 font-bold  text-white w-full my-[8px]`}
    >
      {loading ? "Please Wait..." : <>{children}</>}
    </button>
  );
};
export default Button;
