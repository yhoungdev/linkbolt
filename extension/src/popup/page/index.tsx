import DashboardLayout from "../../layout/dashboardLayout";
import HomeStat from "../components/organisms/dashboard/home/homeStat";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="my-4">
        <HomeStat />
      </div>
    </DashboardLayout>
  );
};
export default Index;
