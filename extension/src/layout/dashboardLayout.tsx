import { ReactNode, FC } from "react";
import DashboardHeader from "../popup/components/molecules/dashboard/header";
import ContainerLayout from "./containerLayout";
import DashboardTabs from "../popup/components/molecules/dashboard/tabs";

interface IDashboard {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboard> = ({ children }) => {
  return (
    <>
      <ContainerLayout>
        <DashboardHeader />
        <div>{children}</div>
        <DashboardTabs />
      </ContainerLayout>
    </>
  );
};
export default DashboardLayout;
