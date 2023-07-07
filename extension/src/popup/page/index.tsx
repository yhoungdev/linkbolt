import DashboardLayout from "../../layout/dashboardLayout";
import ShareLinks from "../components/molecules/dashboard/home/shareLinks";
import HomeStat from "../components/organisms/dashboard/home/homeStat";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="my-4">
        <HomeStat />
        <ShareLinks />
      </div>
    </DashboardLayout>
  );
};
export default Index;
