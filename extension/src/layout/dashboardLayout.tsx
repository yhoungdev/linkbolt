import { ReactNode, FC } from "react";
import DashboardHeader from "../popup/components/molecules/dashboard/header";
import ContainerLayout from "./containerLayout";

interface IDashboard {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboard> = ({ children }) => {
  return (
    <>
      <ContainerLayout>
        <DashboardHeader />
        <div>{children}</div>
      </ContainerLayout>
    </>
  );
};
export default DashboardLayout;
