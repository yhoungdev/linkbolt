import { ReactNode } from "react";

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return <div className="container px-4 mx-auto">{children}</div>;
};
export default ContainerLayout;
