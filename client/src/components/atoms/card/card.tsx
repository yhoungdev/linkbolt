import { FC, ReactNode } from "react";

interface ICard {
  children: ReactNode;
}

const Card: FC<ICard> = ({ children }) => {
  return (
    <div className="w-full px-8 py-10 mx-auto link-font_popins rounded-2xl bg-100 md:w-2/5">
      {children}
    </div>
  );
};
export default Card;
